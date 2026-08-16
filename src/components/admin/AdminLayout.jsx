import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const TITLES = {
  '/admin/dashboard': 'Overview',
  '/admin/services': 'Services Management',
  '/admin/products': 'Products Management',
  '/admin/messages': 'Messages',
  '/admin/users': 'Users Management',
  '/admin/settings': 'Settings',
};

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const title = TITLES[location.pathname] || 'Admin';

  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);

  useEffect(() => {
    if (!sidebarOpen) return;
    function handleKeyDown(e) {
      if (e.key === 'Escape') closeSidebar();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen]);

  return (
    <div className="admin-layout">
      <AdminSidebar open={sidebarOpen} onClose={closeSidebar} />
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <div className="admin-content-column">
        <AdminHeader title={title} onMenuClick={() => setSidebarOpen(true)} />
        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}