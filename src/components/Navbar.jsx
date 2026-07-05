import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Activity, Menu, X, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo-wrapper" onClick={closeMenu}>
          <Activity className="logo-icon" />
          <span>HealthSync<span style={{ color: 'var(--primary)' }}>.</span></span>
        </Link>

        {/* Mobile toggle */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/doctors" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Doctors</NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Services</NavLink>
          <NavLink to="/blog" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Blog</NavLink>
          <NavLink to="/portal" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Patient Portal</NavLink>
          <NavLink to="/lab-reports" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Lab Reports</NavLink>
          <NavLink to="/pharmacy" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Pharmacy</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Contact</NavLink>

          {/* Render CTA inside mobile list */}
          <div style={{ display: 'none' }} className="mobile-cta-only">
            <Link to="/book" className="btn btn-primary" onClick={closeMenu}>
              <Calendar size={18} /> Book Appointment
            </Link>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta">
          <Link to="/book" className="btn btn-primary">
            <Calendar size={18} /> Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
