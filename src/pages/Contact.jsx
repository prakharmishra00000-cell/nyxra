import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, ShieldAlert } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all the details.");
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container section">
      <div className="text-center max-w-3xl">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">Reach out to us for clinical questions, booking assistance, or emergency support guidelines.</p>
      </div>

      <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start', marginBottom: '80px' }}>
        {/* Contact Info Panel */}
        <div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Get in Touch</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)' }}>
                <MapPin size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', margin: 0 }}>Clinic Address</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '4px' }}>
                  102, Medical Enclave, Sector 15, Gurgaon, Haryana, India - 122001
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)' }}>
                <Phone size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', margin: 0 }}>Phone & WhatsApp</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '4px' }}>
                  <strong>General OPD:</strong> +91 98765 43210<br />
                  <strong>WhatsApp Queries:</strong> +91 99999 88888
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)' }}>
                <Mail size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', margin: 0 }}>Email Help</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '4px' }}>
                  info@healthsyncclinic.com &bull; support@healthsyncclinic.com
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)' }}>
                <Clock size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', margin: 0 }}>OPD Consultation Hours</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '4px' }}>
                  Monday - Saturday: 8:00 AM - 8:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '32px', padding: '20px', borderRadius: '8px', backgroundColor: '#fee2e2', border: '1px solid #fecaca', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <ShieldAlert size={20} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ color: '#991b1b', fontSize: '0.95rem', margin: 0 }}>Emergency Trauma Info</h4>
              <p style={{ color: '#991b1b', fontSize: '0.85rem', margin: '4px 0 0 0' }}>
                For cardiac arrest, severe blood loss, or breathing distress, call our ambulance wing directly at <strong>1-800-555-9911</strong>. Trauma units operate 24x7.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Panel */}
        <div className="card" style={{ padding: '32px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send a Message</h2>
          
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', backgroundColor: '#dcfce7', color: 'var(--primary)', marginBottom: '16px' }}>
                <Send size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Message Received!</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '20px' }}>
                We have received your message. Our helpdesk team will contact you back shortly.
              </p>
              <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Your Full Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="form-control"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="form-control"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number *</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter phone"
                  className="form-control"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-msg">Message / Query *</label>
                <textarea
                  id="contact-msg"
                  name="message"
                  placeholder="Write your question..."
                  className="form-control"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                Submit Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Map Mock & Parking */}
      <div className="card" style={{ padding: '32px' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Directions & Parking Details</h3>
        <div className="grid-2" style={{ gap: '32px', alignItems: 'center' }}>
          <div style={{ 
            height: '240px', 
            borderRadius: 'var(--radius-md)', 
            backgroundColor: '#e2e8f0', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            border: '1px solid var(--border)',
            backgroundImage: 'radial-gradient(var(--border) 1px, transparent 0)',
            backgroundSize: '16px 16px',
            color: 'var(--text-light)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ textAlign: 'center', zIndex: 2 }}>
              <MapPin size={32} style={{ color: '#ef4444', margin: '0 auto 8px auto' }} />
              <strong>HealthSync Clinic</strong>
              <p style={{ fontSize: '0.8rem', margin: '4px 0 0 0' }}>102, Medical Enclave, Sector 15, Gurgaon</p>
            </div>
            {/* Simulated map graphic */}
            <div style={{ position: 'absolute', top: '20px', left: '20px', width: '80px', height: '8px', backgroundColor: 'var(--border)', transform: 'rotate(15deg)' }} />
            <div style={{ position: 'absolute', bottom: '30px', right: '40px', width: '120px', height: '8px', backgroundColor: 'var(--border)', transform: 'rotate(-45deg)' }} />
          </div>
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '10px' }}>Patient Parking Guidelines</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text)', marginBottom: '12px' }}>
              <strong>Valet Parking:</strong> Complementary valet services are available for clinical consult patients at the main lobby driveway drop-off point.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
              <strong>Basement Parking:</strong> Paid self-parking slots are accessible in the basement floors B1 and B2. Wheelchair assistance ramps link directly to the lift elevators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
