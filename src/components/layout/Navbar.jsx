import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, LayoutDashboard, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { logoutUser } from '../../services/authService';
import { useToast } from '../../context/ToastContext';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, isAdmin } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  async function handleLogout() {
    const { error } = await logoutUser();
    if (error) {
      showToast(error, 'error');
    } else {
      showToast('Signed out successfully.', 'success');
      navigate('/');
    }
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <nav
        className="container"
        style={{
          height: 'var(--header-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <Link to="/" style={{ fontWeight: 800, fontSize: 'var(--fs-lg)', color: 'var(--text)' }}>
          Build<sup>Trust</sup>
        </Link>

        <div className={`navbar-links${open ? ' mobile-open' : ''}`} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `btn btn-ghost btn-sm`}
              style={({ isActive }) => ({
                color: isActive ? 'var(--primary)' : 'var(--text)',
                fontWeight: isActive ? 700 : 500,
              })}
            >
              {link.label}
            </NavLink>
          ))}

          {isAuthenticated ? (
            <>
              {isAdmin && (
                <Link to="/admin/dashboard" className="btn btn-outline btn-sm" onClick={() => setOpen(false)}>
                  <LayoutDashboard size={15} /> Dashboard
                </Link>
              )}
              <button className="btn btn-primary btn-sm" onClick={handleLogout}>
                <LogOut size={15} /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}
        </div>

        <button
          className="btn btn-ghost btn-icon navbar-toggle"
          style={{ display: 'none' }}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}
