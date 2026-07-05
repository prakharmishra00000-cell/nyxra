import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { services } from '../data';
import { HelpCircle, Stethoscope, ChevronRight, Activity, ArrowRight } from 'lucide-react';

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  
  // Set default active tab to the param or fallback to first service
  const [activeTab, setActiveTab] = useState(tabParam || services[0].id);

  // Sync active tab with search parameter changes
  useEffect(() => {
    if (tabParam && services.some(s => s.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const activeService = services.find((svc) => svc.id === activeTab) || services[0];

  const handleTabChange = (id) => {
    setActiveTab(id);
    setSearchParams({ tab: id });
  };

  return (
    <div className="container section">
      <div className="text-center max-w-3xl">
        <h1 className="section-title">Clinic Medical Services</h1>
        <p className="section-subtitle">Detailed clinical insights, common symptoms, causes, diagnosis, and treatment pathways.</p>
      </div>

      <div className="service-details-layout">
        {/* Left Side: Services Menu */}
        <aside className="service-menu">
          {services.map((svc) => (
            <button
              key={svc.id}
              className={`service-menu-item ${activeService.id === svc.id ? 'active' : ''}`}
              onClick={() => handleTabChange(svc.id)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{svc.title}</span>
                <ChevronRight size={16} />
              </div>
            </button>
          ))}
        </aside>

        {/* Right Side: Active Service Details */}
        <article className="card" style={{ padding: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ padding: '12px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)' }}>
              <Stethoscope size={28} />
            </div>
            <h2 style={{ fontSize: '2rem' }}>{activeService.title}</h2>
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--text)', marginBottom: '32px' }}>
            {activeService.intro}
          </p>

          <div className="grid-2" style={{ marginBottom: '32px' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--secondary)' }}>Common Symptoms</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeService.symptoms.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--secondary)' }}>Potential Causes</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeService.causes.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid-2" style={{ marginBottom: '40px' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--secondary)' }}>Diagnostic Methods</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeService.diagnosis.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#6366f1' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--secondary)' }}>Treatment Options</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeService.treatments.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ padding: '24px', backgroundColor: '#f0fdf4', borderRadius: 'var(--radius-md)', border: '1px solid #bbf7d0', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#166534', marginBottom: '8px' }}>Key Health Benefits</h3>
            <p style={{ color: '#166534', fontSize: '0.95rem' }}>{activeService.benefits}</p>
          </div>

          {/* Service Specific FAQ */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: 'var(--secondary)' }}>Frequently Asked Questions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {activeService.faqs.map((faq, index) => (
                <div key={index} style={{ borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '6px' }}>
                    <HelpCircle size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '4px' }} />
                    {faq.q}
                  </h4>
                  <p style={{ color: 'var(--text)', fontSize: '0.9rem', paddingLeft: '24px' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Link */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to={`/book?department=${activeService.id}`} className="btn btn-primary">
              Book Appointment for {activeService.title} <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
