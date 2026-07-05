import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle } from 'lucide-react';

export default function Legal() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="container section">
      <div className="text-center max-w-3xl">
        <h1 className="section-title">Legal Information</h1>
        <p className="section-subtitle">Read our official data governance frameworks, clinic terms of service, and cookie policies.</p>
      </div>

      <div className="tab-container" style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ display: 'inline-flex', gap: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '4px' }}>
          <button 
            className={`tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            Privacy Policy
          </button>
          <button 
            className={`tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveTab('terms')}
          >
            Terms & Conditions
          </button>
        </div>
      </div>

      <div className="card max-w-3xl" style={{ margin: '0 auto', padding: '36px', textAlign: 'left', fontSize: '0.95rem', color: 'var(--text)' }}>
        {activeTab === 'privacy' ? (
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={24} style={{ color: 'var(--primary)' }} /> Privacy Policy & Patient Data Security
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '24px' }}>Last Updated: July 5, 2026</p>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', marginTop: '20px' }}>1. Collection of Health Records</h3>
            <p style={{ marginBottom: '16px' }}>
              We collect medical history inputs, diagnostic requests, prescriptions, and billing coordinates to guarantee smooth clinical assistance. Patient records are stored securely in compliance with regional medical data regulations.
            </p>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', marginTop: '20px' }}>2. Data Encryption and Auditing</h3>
            <p style={{ marginBottom: '16px' }}>
              All client logins, report searches, and prescription uploads are processed over encrypted HTTPS links. Access is restricted to certified physicians and diagnostic administrators directly associated with your clinical care.
            </p>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', marginTop: '20px' }}>3. Third-party Sharing</h3>
            <p style={{ marginBottom: '16px' }}>
              We do not sell, rent, or lease clinical records. Diagnostic details are shared only with insurance providers explicitly specified by the patient for claim settlement procedures.
            </p>
          </div>
        ) : (
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={24} style={{ color: 'var(--primary)' }} /> Terms & Conditions
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '24px' }}>Last Updated: July 5, 2026</p>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', marginTop: '20px' }}>1. Booking Regulations</h3>
            <p style={{ marginBottom: '16px' }}>
              Online slots scheduled through our portal are subject to physician availability. While we make every attempt to prevent changes, slots may occasionally be rescheduled due to emergency trauma call-ins.
            </p>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', marginTop: '20px' }}>2. Cancellation Guidelines</h3>
            <p style={{ marginBottom: '16px' }}>
              Patients are requested to cancel or reschedule appointments at least 2 hours in advance. Repeated no-shows without notification may affect booking privileges in the future.
            </p>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', marginTop: '20px' }}>3. Diagnostic Disclaimer</h3>
            <p style={{ marginBottom: '16px' }}>
              The chatbot information and blog post descriptions are intended strictly for educational health awareness. They do not constitute formal medical diagnosis or prescription. Always consult a certified clinical professional in case of medical emergency.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
