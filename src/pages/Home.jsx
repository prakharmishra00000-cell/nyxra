import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, ArrowRight, ShieldCheck, Heart, Award, Star } from 'lucide-react';
import { doctors, services, testimonials } from '../data';

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <ShieldCheck size={16} />
              <span>Certified Healthcare Facility</span>
            </div>
            <h1 className="hero-title">Quality Healthcare You Can Trust</h1>
            <p className="hero-desc">
              Experienced doctors providing personalized treatment with modern medical facilities. Book your appointment today.
            </p>
            <div className="hero-actions">
              <Link to="/book" className="btn btn-primary btn-lg">
                <Calendar size={18} /> Book Appointment
              </Link>
              <a href="tel:+919876543210" className="btn btn-outline">
                <Phone size={18} /> Call Us Now
              </a>
            </div>
          </div>
          <div className="hero-graphic">
            <div className="hero-circle">
              {/* Overlay cards */}
              <div className="hero-card-overlay overlay-1">
                <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)' }}>
                  <Heart size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '2px' }}>Patient Care First</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', margin: 0 }}>Compassionate specialists</p>
                </div>
              </div>
              <div className="hero-card-overlay overlay-2">
                <div className="hero-doctor-badge">
                  <h3>15+</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', margin: 0 }}>Years Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Specialist Doctors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Medical Services</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.2%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl">
            <h2 className="section-title">Our Medical Services</h2>
            <p className="section-subtitle">We offer a wide range of specialized healthcare options tailored to your family's needs.</p>
          </div>

          <div className="grid-3">
            {services.slice(0, 3).map((svc) => (
              <div key={svc.id} className="card">
                <h3 style={{ marginBottom: '12px', fontSize: '1.25rem' }}>{svc.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '20px' }}>{svc.shortDesc}</p>
                <Link to={`/services?tab=${svc.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Highlights */}
      <section className="section section-bg">
        <div className="container">
          <div className="text-center max-w-3xl">
            <h2 className="section-title">Meet Our Specialists</h2>
            <p className="section-subtitle">Dedicated professionals committed to clinical excellence and personalized treatment.</p>
          </div>

          <div className="grid-3">
            {doctors.slice(0, 3).map((doc) => (
              <div key={doc.id} className="card" style={{ padding: 0, overflow: 'hidden', textAlign: 'center' }}>
                <img 
                  src={doc.photo} 
                  alt={doc.name} 
                  style={{ width: '100%', height: '240px', objectFit: 'cover' }} 
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{doc.name}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.85rem', marginBottom: '12px' }}>{doc.qualification}</p>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '16px' }}>{doc.specialization}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', marginBottom: '20px' }}>
                    <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
                    <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{doc.rating}</span>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>({doc.reviews} reviews)</span>
                  </div>
                  <Link to="/doctors" className="btn btn-outline" style={{ width: '100%' }}>
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl">
            <h2 className="section-title">Patient Testimonials</h2>
            <p className="section-subtitle">Real experiences and feedback from individuals who trusted us with their health.</p>
          </div>

          <div className="grid-3">
            {testimonials.map((test) => (
              <div key={test.id} className="card testimonial-card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" stroke="#fbbf24" />
                  ))}
                </div>
                <p style={{ fontStyle: 'italic', fontSize: '0.95rem', marginBottom: '16px', color: 'var(--text)' }}>
                  "{test.text}"
                </p>
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '2px' }}>{test.name}</h4>
                  <span className="badge badge-primary">{test.type} Patient</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section & Working Hours */}
      <section className="section" style={{ backgroundColor: 'var(--secondary)', color: 'var(--white)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ color: '#fff', fontSize: '2.25rem', marginBottom: '16px' }}>Ready to Schedule Your Visit?</h2>
              <p style={{ color: '#94a3b8', marginBottom: '32px', fontSize: '1.1rem' }}>
                Book appointments instantly, consult with our expert doctors via video call, or download your lab reports right from your computer.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/book" className="btn btn-primary">
                  <Calendar size={18} /> Book Appointment
                </Link>
                <Link to="/portal" className="btn btn-outline" style={{ color: '#fff', borderColor: '#475569' }}>
                  Patient Portal Login
                </Link>
              </div>
            </div>

            <div className="card" style={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#f8fafc' }}>
              <h3 style={{ color: '#fff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Regular Working Hours</span>
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '8px' }}>
                  <span>Monday - Friday</span>
                  <strong>8:00 AM - 8:00 PM</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '8px' }}>
                  <span>Saturday</span>
                  <strong>9:00 AM - 5:00 PM</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '8px' }}>
                  <span>Sunday</span>
                  <span style={{ color: '#ef4444', fontWeight: 'bold' }}>Emergency Only (24/7)</span>
                </li>
              </ul>
              <div style={{ marginTop: '24px', padding: '16px', borderRadius: '8px', backgroundColor: '#0f172a', textAlign: 'center' }}>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  <strong>Valet Parking:</strong> Available free of charge for patients at the main wing entrance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
