import { Link, useNavigate } from 'react-router-dom';
import { Menu, LogOut, Home } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { logoutUser } from '../../services/authService';
import { useToast } from '../../context/ToastContext';
import { initials } from '../../utils/formatters';

export default function AdminHeader({ onMenuClick, title }) {
  const { profile } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  async function handleLogout() {
    const { error } = await logoutUser();
    if (error) {
      showToast(error, 'error');
      return;
    }
    navigate('/login');
  }

  return (
    <header
      style={{
        height: 'var(--header-height)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        position: 'sticky',
        top: 0,
        zIndex: 80,
        minWidth: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
        <button
          className="btn btn-ghost btn-icon"
          style={{ display: 'none' }}
          data-mobile-only
          onClick={onMenuClick}
          aria-label="Open sidebar menu"
        >
          <Menu size={20} />
        </button>
        <h2
          style={{
            margin: 0,
            fontSize: 'var(--fs-lg)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
        <Link to="/" className="btn btn-ghost btn-sm admin-back-home-btn" aria-label="Back to home page">
          <Home size={15} />
          <span className="admin-header-back-home-label">Back to Home</span>
        </Link>
        <div
          style={{
            width: 36,
            height: 36,
            minWidth: 36,
            borderRadius: '50%',
            background: 'var(--primary)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 'var(--fs-sm)',
          }}
        >
          {initials(profile?.name || 'Admin')}
        </div>
        <button className="btn btn-outline btn-sm" onClick={handleLogout}>
          <LogOut size={15} />
          <span className="admin-header-logout-label">Logout</span>
        </button>
      </div>
    </header>
  );
}