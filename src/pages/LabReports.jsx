import React, { useState } from 'react';
import { Search, Download, AlertCircle, FileText, CheckCircle } from 'lucide-react';

export default function LabReports() {
  const [patientId, setPatientId] = useState("");
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState([]);

  const mockDatabase = {
    "PATIENT123": [
      { id: "REP-992", testName: "Complete Blood Count (CBC)", date: "2026-06-12", status: "Completed", doctor: "Dr. Rahul Sharma" },
      { id: "REP-441", testName: "Lipid Profile Panel", date: "2026-06-12", status: "Completed", doctor: "Dr. Vikram Aditya" },
      { id: "REP-105", testName: "Thyroid Stimulating Hormone (TSH)", date: "2026-07-04", status: "In Process", doctor: "Dr. Rahul Sharma" }
    ],
    "DEMO": [
      { id: "REP-001", testName: "HbA1c Blood Glucose", date: "2026-06-25", status: "Completed", doctor: "Dr. Rahul Sharma" }
    ]
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!patientId.trim()) return;

    const key = patientId.trim().toUpperCase();
    if (mockDatabase[key]) {
      setResults(mockDatabase[key]);
    } else {
      setResults([]);
    }
    setSearched(true);
  };

  return (
    <div className="container section">
      <div className="text-center max-w-3xl">
        <h1 className="section-title">Download Lab Reports</h1>
        <p className="section-subtitle">Input your unique Patient ID to view diagnostic progress and download PDF test certificates.</p>
      </div>

      <div className="card max-w-3xl" style={{ margin: '0 auto', padding: '32px' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Diagnostic Status Search</h3>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-light)' }} />
            <input
              type="text"
              placeholder="Enter Patient ID (e.g. PATIENT123 or DEMO)"
              className="form-control"
              style={{ paddingLeft: '40px' }}
              required
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Find Reports</button>
        </form>

        {searched && (
          <div style={{ marginTop: '40px', textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
              Search Results for "{patientId.toUpperCase()}"
            </h4>

            {results.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {results.map((rep) => (
                  <div 
                    key={rep.id} 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      padding: '20px', 
                      borderRadius: '8px', 
                      border: '1px solid var(--border)',
                      backgroundColor: rep.status === "Completed" ? '#ffffff' : '#f8fafc',
                      flexWrap: 'wrap',
                      gap: '16px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 'bold' }}>ID: {rep.id}</span>
                        <span className={`badge ${rep.status === "Completed" ? 'badge-primary' : 'badge-accent'}`}>
                          {rep.status}
                        </span>
                      </div>
                      <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{rep.testName}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: '4px 0 0 0' }}>
                        Prescribed by {rep.doctor} &bull; Ordered on {rep.date}
                      </p>
                    </div>

                    <div>
                      {rep.status === "Completed" ? (
                        <button 
                          className="btn btn-primary" 
                          style={{ fontSize: '0.85rem', padding: '10px 16px' }}
                          onClick={() => alert(`Downloading PDF report ${rep.id} for ${rep.testName}...`)}
                        >
                          <Download size={16} /> Download PDF
                        </button>
                      ) : (
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <AlertCircle size={16} /> Ready in 24 hours
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '32px 0', color: 'var(--text-light)' }}>
                <AlertCircle size={32} style={{ color: 'var(--text-light)', marginBottom: '8px' }} />
                <p>No medical files found for that Patient ID. Please check the spelling or contact clinic support.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Trust factors */}
      <div className="grid-3" style={{ marginTop: '80px' }}>
        <div className="card text-center">
          <CheckCircle size={28} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
          <h4 style={{ marginBottom: '8px' }}>NABL Accredited Lab</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Fully certified lab infrastructure satisfying national diagnostics standards.</p>
        </div>
        <div className="card text-center">
          <CheckCircle size={28} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
          <h4 style={{ marginBottom: '8px' }}>Automated Analysis</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Minimized human manual errors via state-of-the-art diagnostic analyzer units.</p>
        </div>
        <div className="card text-center">
          <CheckCircle size={28} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
          <h4 style={{ marginBottom: '8px' }}>Secure PDFs</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Password-protected files ensuring full data security for patient information.</p>
        </div>
      </div>
    </div>
  );
}
