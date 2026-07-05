import React from 'react';
import { ShieldCheck, Users, Eye, Target, Award, Heart, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="container section">
      {/* Introduction */}
      <div className="text-center max-w-3xl">
        <h1 className="section-title" style={{ fontSize: '3rem' }}>About HealthSync Clinic</h1>
        <p className="section-subtitle">A state-of-the-art multi-specialty clinic centered around clinical excellence, patient-first ethics, and compassion.</p>
      </div>

      {/* History and Stats */}
      <div className="grid-2" style={{ alignItems: 'center', marginBottom: '80px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Our History</h2>
          <p style={{ marginBottom: '16px', color: 'var(--text)' }}>
            Founded in 2012, HealthSync Clinic began with a small team of three doctors who believed that healthcare should be warm, transparent, and patient-centric. Over the last decade, we have expanded into a premier medical center, treating over 15,000 satisfied patients.
          </p>
          <p style={{ color: 'var(--text)' }}>
            Today, our facility brings together highly trained specialists, modern laboratory equipment, and automated booking infrastructure to make clinical visits stress-free and highly effective.
          </p>
        </div>
        <div style={{ backgroundColor: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}>
          <h3 style={{ marginBottom: '20px', fontSize: '1.25rem' }}>Why Choose Us?</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 className="logo-icon" style={{ flexShrink: 0, color: 'var(--primary)' }} />
              <div>
                <strong>Certified Doctors:</strong> Every specialist has board certification and 8+ years of core hospital practice.
              </div>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 className="logo-icon" style={{ flexShrink: 0, color: 'var(--primary)' }} />
              <div>
                <strong>Advanced Tech:</strong> In-house digital labs, high-frequency ultrasonography, and remote health portals.
              </div>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 className="logo-icon" style={{ flexShrink: 0, color: 'var(--primary)' }} />
              <div>
                <strong>Patient-First Ethos:</strong> Personalized attention without unnecessary tests or long waiting lines.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid-2" style={{ marginBottom: '80px' }}>
        <div className="card text-center" style={{ padding: '40px' }}>
          <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', marginBottom: '20px' }}>
            <Target size={32} />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Our Mission</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
            To deliver outstanding, compassionate clinical outcomes using evidence-based practice and state-of-the-art technology, accessible to all members of our community.
          </p>
        </div>

        <div className="card text-center" style={{ padding: '40px' }}>
          <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', backgroundColor: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent)', marginBottom: '20px' }}>
            <Eye size={32} />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Our Vision</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
            To be recognized as the region's most trusted partner in patient wellness, setting the gold standard for clinical quality, safety, and modern infrastructure.
          </p>
        </div>
      </div>

      {/* Values */}
      <div style={{ marginBottom: '80px' }}>
        <div className="text-center max-w-3xl">
          <h2 className="section-title">Core Principles</h2>
          <p className="section-subtitle">Values that guide our interactions with patients, caregivers, and staff members every single day.</p>
        </div>

        <div className="grid-3">
          <div className="card text-center">
            <Heart size={28} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
            <h4 style={{ marginBottom: '8px', fontSize: '1.15rem' }}>Compassion</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>We listen patiently, treat everyone with kindness, and acknowledge emotional wellness alongside physical health.</p>
          </div>
          <div className="card text-center">
            <ShieldCheck size={28} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
            <h4 style={{ marginBottom: '8px', fontSize: '1.15rem' }}>Integrity</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>We maintain complete transparency in diagnostics, billing, and treatment plans. No hidden costs or redundant assays.</p>
          </div>
          <div className="card text-center">
            <Award size={28} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
            <h4 style={{ marginBottom: '8px', fontSize: '1.15rem' }}>Excellence</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>We constantly upgrade our knowledge, refine clinical skills, and adopt the latest medical standards.</p>
          </div>
        </div>
      </div>

      {/* Infrastructure Showcases */}
      <div>
        <div className="text-center max-w-3xl">
          <h2 className="section-title">Clinic Infrastructure</h2>
          <p className="section-subtitle">Our facility is designed to keep patients comfortable and clinicians fully supported.</p>
        </div>

        <div className="grid-3">
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" 
              alt="Reception Area" 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '20px' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Reception & Waiting Lounge</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Spacious, comfortable seating area designed to keep waiting periods relaxed, complete with high-speed guest Wi-Fi.</p>
            </div>
          </div>

          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400" 
              alt="Consultation Room" 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '20px' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Private Consultation Chambers</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Soundproof rooms ensuring full privacy for patient-doctor conversations and detailed, unhurried check-ups.</p>
            </div>
          </div>

          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1579165466511-79e7d2690975?auto=format&fit=crop&q=80&w=400" 
              alt="Diagnostic Lab" 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '20px' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Diagnostic Path Lab</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Equipped with automated biochemistry analyzers and hematology instruments for fast, highly accurate results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
