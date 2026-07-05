import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Languages, Award, Shield, Clock, BookOpen } from 'lucide-react';
import { doctors } from '../data';

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const specialties = ["all", ...new Set(doctors.map(d => d.specialization.split(' & ')[0]))];

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialtyFilter === "all" || doc.specialization.includes(specialtyFilter);
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="container section">
      <div className="text-center max-w-3xl">
        <h1 className="section-title">Our Medical Specialists</h1>
        <p className="section-subtitle">Connect with highly qualified, experienced doctors committed to providing personalized treatments.</p>
      </div>

      {/* Filter and Search Bar */}
      <div className="card" style={{ marginBottom: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-light)' }} />
          <input
            type="text"
            placeholder="Search doctors by name or specialty..."
            className="form-control"
            style={{ paddingLeft: '40px' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div style={{ minWidth: '200px' }}>
          <select
            className="form-control"
            value={specialtyFilter}
            onChange={(e) => setSpecialtyFilter(e.target.value)}
          >
            <option value="all">All Specialties</option>
            <option value="General Physician">General Medicine</option>
            <option value="Pediatrician">Pediatrics</option>
            <option value="Orthopedic Surgeon">Orthopedics</option>
            <option value="Dermatologist">Dermatology</option>
            <option value="Cardiologist">Cardiology</option>
          </select>
        </div>
      </div>

      {/* Doctor Grid */}
      <div className="grid-3" style={{ marginBottom: '80px' }}>
        {filteredDoctors.map((doc) => (
          <div key={doc.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img
              src={doc.photo}
              alt={doc.name}
              style={{ width: '100%', height: '260px', objectFit: 'cover' }}
            />
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span className="badge badge-primary" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                {doc.specialization}
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>{doc.name}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '12px' }}>{doc.qualification}</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text)' }}>
                <Clock size={16} style={{ color: 'var(--primary)' }} />
                <span>{doc.experience}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', marginBottom: '16px', color: 'var(--text)' }}>
                <Languages size={16} style={{ color: 'var(--primary)' }} />
                <span>{doc.languages.join(', ')}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '24px' }}>
                <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{doc.rating}</span>
                <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>({doc.reviews} patient reviews)</span>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                <button 
                  className="btn btn-outline" 
                  style={{ flex: 1 }}
                  onClick={() => setSelectedDoctor(doc)}
                >
                  View Details
                </button>
                <Link 
                  to={`/book?doctor=${doc.id}`} 
                  className="btn btn-primary" 
                  style={{ flex: 1 }}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal Overlay */}
      {selectedDoctor && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '24px'
        }} onClick={() => setSelectedDoctor(null)}>
          <div className="card max-w-3xl" style={{ 
            backgroundColor: '#ffffff', 
            maxHeight: '90vh', 
            overflowY: 'auto', 
            position: 'relative',
            width: '100%',
            padding: '32px'
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: 'none', fontSize: '1.5rem', cursor: 'pointer', fontWeight: 'bold' }}
              onClick={() => setSelectedDoctor(null)}
            >
              &times;
            </button>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <img 
                src={selectedDoctor.photo} 
                alt={selectedDoctor.name} 
                style={{ width: '180px', height: '180px', borderRadius: 'var(--radius-md)', objectFit: 'cover' }}
              />
              <div>
                <span className="badge badge-primary" style={{ marginBottom: '8px' }}>{selectedDoctor.specialization}</span>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '4px' }}>{selectedDoctor.name}</h2>
                <p style={{ color: 'var(--text-light)', marginBottom: '8px' }}>{selectedDoctor.qualification}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
                  <strong>Reg Number:</strong> {selectedDoctor.regNo}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
                  <strong>Languages:</strong> {selectedDoctor.languages.join(', ')}
                </p>
              </div>
            </div>

            <hr style={{ borderColor: 'var(--border)', margin: '20px 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '1.1rem' }}>
                  <Award size={18} style={{ color: 'var(--primary)' }} /> Awards & Achievements
                </h4>
                <ul style={{ listStyle: 'inside disc', fontSize: '0.9rem', paddingLeft: '8px' }}>
                  {selectedDoctor.awards.map((award, idx) => (
                    <li key={idx} style={{ marginBottom: '4px' }}>{award}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '1.1rem' }}>
                  <Shield size={18} style={{ color: 'var(--primary)' }} /> Memberships & Affiliations
                </h4>
                <ul style={{ listStyle: 'inside disc', fontSize: '0.9rem', paddingLeft: '8px' }}>
                  {selectedDoctor.memberships.map((membership, idx) => (
                    <li key={idx} style={{ marginBottom: '4px' }}>{membership}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '1.1rem' }}>
                  <Clock size={18} style={{ color: 'var(--primary)' }} /> Consultation Hours
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{selectedDoctor.timings}</p>
              </div>
            </div>

            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button className="btn btn-outline" onClick={() => setSelectedDoctor(null)}>Close</button>
              <Link to={`/book?doctor=${selectedDoctor.id}`} className="btn btn-primary" onClick={() => setSelectedDoctor(null)}>
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
