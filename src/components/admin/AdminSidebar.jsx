import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Wrench,
  Package,
  Users,
  MessageSquare,
  Settings,
  Building2,
} from 'lucide-react';

const NAV_ITEMS = [
  { to: '/admin/dashboard', label: 'Overview', icon: LayoutDashboard },
  { to: '/admin/services', label: 'Services', icon: Wrench },
  { to: '/admin/products', label: 'Products', icon: Package },
  { to: '/admin/messages', label: 'Messages', icon: MessageSquare },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminSidebar({ open, onNavigate }) {
  return (
    <aside
      className={`admin-sidebar${open ? ' open' : ''}`}
      style={{
        width: 'var(--sidebar-width)',
        background: 'var(--primary-dark)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 14px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px 24px' }}>
        <Building2 size={22} />
        <span style={{ fontWeight: 800 }}>Admin Panel</span>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onNavigate}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '11px 14px',
              borderRadius: 10,
              color: '#fff',
              fontWeight: isActive ? 700 : 500,
              background: isActive ? 'rgba(255,255,255,0.14)' : 'transparent',
            })}
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
