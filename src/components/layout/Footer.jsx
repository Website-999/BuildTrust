import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--primary-dark)', color: '#e9efec', marginTop: 'auto' }}>
      <div className="container" style={{ padding: '56px 24px 32px' }}>
        <div className="grid grid-3" style={{ marginBottom: 32 }}>
          <div>
            <h3 style={{ color: '#fff' }}>Build<sup>Trust</sup></h3>
            <p style={{ color: '#c6d4cd' }}>
              Proudly serving Phnom Penh and beyond with quality service you can trust.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#fff' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link to="/about" style={{ color: '#c6d4cd' }}>About Us</Link>
              <Link to="/services" style={{ color: '#c6d4cd' }}>Services</Link>
              <Link to="/products" style={{ color: '#c6d4cd' }}>Products</Link>
              <Link to="/contact" style={{ color: '#c6d4cd' }}>Contact</Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: '#fff' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, color: '#c6d4cd' }}>
              <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <MapPin size={16} /> Phnom Penh, Cambodia
              </span>
              <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Phone size={16} /> +855 86 77 41 321
              </span>
              <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Mail size={16} /> admin@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 20, color: '#9fb3a9', fontSize: 'var(--fs-sm)' }}>
          © {year} BuildTrust. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
