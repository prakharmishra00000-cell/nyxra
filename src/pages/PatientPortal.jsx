import React, { useState } from 'react';
import { User, LogIn, Calendar, FileText, Activity, CreditCard, LogOut, CheckCircle2, AlertCircle } from 'lucide-react';

export default function PatientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [appointments, setAppointments] = useState([
    { id: 1, doctor: "Dr. Rahul Sharma", date: "2026-07-15", time: "10:00 AM", status: "Confirmed", specialty: "General Medicine" },
    { id: 2, doctor: "Dr. Vikram Aditya", date: "2026-06-10", time: "02:30 PM", status: "Completed", specialty: "Cardiology" }
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (patientId.toUpperCase() === "PATIENT123" || patientId.trim() !== "") {
      setIsLoggedIn(true);
    } else {
      alert("Please enter a valid Patient ID or Username.");
    }
  };

  const handleCancelAppointment = (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      setAppointments(prev => prev.filter(appt => appt.id !== id));
    }
  };

  const mockPatientData = {
    name: "Arnav Malhotra",
    id: "PATIENT123",
    age: 34,
    gender: "Male",
    bloodGroup: "O+",
    history: [
      { condition: "Seasonal Bronchitis", diagnosed: "2024", status: "Managed" },
      { condition: "Mild Vitamin D Deficiency", diagnosed: "2025", status: "Taking Supplements" }
    ],
    prescriptions: [
      { id: "RX-5528", date: "2026-06-10", doctor: "Dr. Vikram Aditya", meds: "Atorvastatin 10mg (once daily), Omega-3 Capsules" },
      { id: "RX-4192", date: "2026-03-05", doctor: "Dr. Rahul Sharma", meds: "Montelukast 10mg (at bedtime), Levocetirizine 5mg (as needed)" }
    ],
    bills: [
      { id: "INV-1092", date: "2026-06-10", service: "Cardiology Consult + ECG", amount: "₹1,500", status: "Paid" },
      { id: "INV-0881", date: "2026-03-05", service: "General OPD Checkup", amount: "₹600", status: "Paid" }
    ],
    reports: [
      { name: "Complete Blood Count", date: "2026-06-12", status: "Completed", testId: "CBC-881" },
      { name: "Lipid Profile Panel", date: "2026-06-12", status: "Completed", testId: "LIP-491" }
    ]
  };

  if (!isLoggedIn) {
    return (
      <div className="container section">
        <div className="text-center max-w-3xl">
          <h1 className="section-title">Patient Portal</h1>
          <p className="section-subtitle">Access your medical files, check active appointments, view bills, and print prescriptions securely.</p>
        </div>

        <div className="card max-w-3xl" style={{ margin: '0 auto', maxWidth: '480px', padding: '32px' }}>
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', marginBottom: '16px' }}>
              <User size={32} />
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Secure Patient Login</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Enter any details to login (Demo: ID is <strong>PATIENT123</strong>)
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="portal-id">Patient ID / Email *</label>
              <input
                id="portal-id"
                type="text"
                placeholder="e.g. PATIENT123"
                className="form-control"
                required
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="portal-pwd">Password *</label>
              <input
                id="portal-pwd"
                type="password"
                placeholder="••••••••"
                className="form-control"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
              <LogIn size={18} /> Sign In to Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="badge badge-primary" style={{ marginBottom: '6px' }}>Welcome Back</span>
          <h1 style={{ fontSize: '2rem', margin: 0 }}>{mockPatientData.name}</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', margin: 0 }}>Patient ID: {mockPatientData.id} | Age: {mockPatientData.age} | Blood: {mockPatientData.bloodGroup}</p>
        </div>
        <button className="btn btn-outline" onClick={() => setIsLoggedIn(false)} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LogOut size={16} /> Sign Out
        </button>
      </div>

      <div className="portal-layout">
        {/* Sidebar Menu */}
        <aside className="portal-sidebar">
          <button className={`portal-menu-btn ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <Activity size={18} /> Dashboard
          </button>
          <button className={`portal-menu-btn ${activeTab === 'appointments' ? 'active' : ''}`} onClick={() => setActiveTab('appointments')}>
            <Calendar size={18} /> Appointments ({appointments.length})
          </button>
          <button className={`portal-menu-btn ${activeTab === 'prescriptions' ? 'active' : ''}`} onClick={() => setActiveTab('prescriptions')}>
            <FileText size={18} /> Prescriptions
          </button>
          <button className={`portal-menu-btn ${activeTab === 'bills' ? 'active' : ''}`} onClick={() => setActiveTab('bills')}>
            <CreditCard size={18} /> Billing & Invoices
          </button>
        </aside>

        {/* Content Panel */}
        <main className="portal-content">
          {activeTab === 'dashboard' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Medical Profile & Health Status</h2>
              
              <div className="grid-2" style={{ marginBottom: '32px' }}>
                <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#f8fafc', border: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Active Clinical Records</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                    {mockPatientData.history.map((h, i) => (
                      <li key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px', borderBottom: '1px dotted var(--border)' }}>
                        <strong>{h.condition}</strong>
                        <span style={{ color: 'var(--primary)', fontWeight: 6 }}>{h.status}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#f8fafc', border: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Latest Diagnostic Reports</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                    {mockPatientData.reports.map((r, i) => (
                      <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{r.name}</span>
                        <span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>{r.status}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card" style={{ backgroundColor: 'rgba(16, 185, 129, 0.03)', border: '1px dashed var(--primary)' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <CheckCircle2 size={18} /> Preventive Health Recommendation
                </h4>
                <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text)' }}>
                  Your annual comprehensive health checkup is due next month. Schedule an appointment with Dr. Rahul Sharma to keep your charts fully updated.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>My Scheduled Appointments</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {appointments.map((appt) => (
                  <div key={appt.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                      <span className="badge badge-secondary" style={{ marginBottom: '6px' }}>{appt.specialty}</span>
                      <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{appt.doctor}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: '4px 0 0 0' }}>
                        {appt.date} at {appt.time}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span className={`badge ${appt.status === 'Confirmed' ? 'badge-primary' : 'badge-secondary'}`}>
                        {appt.status}
                      </span>
                      {appt.status === 'Confirmed' && (
                        <button 
                          className="btn btn-outline" 
                          style={{ fontSize: '0.8rem', padding: '6px 12px', color: '#ef4444', borderColor: '#fee2e2' }}
                          onClick={() => handleCancelAppointment(appt.id)}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {appointments.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-light)' }}>
                    <AlertCircle size={32} style={{ marginBottom: '8px', color: 'var(--text-light)' }} />
                    <p>No active appointments scheduled.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'prescriptions' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Active Digital Prescriptions</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {mockPatientData.prescriptions.map((rx) => (
                  <div key={rx.id} style={{ padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', margin: 0 }}>ID: {rx.id}</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: 0 }}>Prescribed by {rx.doctor} on {rx.date}</p>
                      </div>
                      <button 
                        className="btn btn-outline" 
                        style={{ fontSize: '0.8rem', padding: '6px 12px' }}
                        onClick={() => alert(`Downloading PDF prescription ${rx.id}...`)}
                      >
                        Download PDF
                      </button>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text)', backgroundColor: '#f8fafc', padding: '12px', borderRadius: '6px', margin: 0 }}>
                      <strong>Medicines:</strong> {rx.meds}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'bills' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Billing Invoices & Receipts</h2>
              
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                    <th style={{ padding: '12px 8px' }}>Invoice ID</th>
                    <th style={{ padding: '12px 8px' }}>Date</th>
                    <th style={{ padding: '12px 8px' }}>Service Details</th>
                    <th style={{ padding: '12px 8px' }}>Amount</th>
                    <th style={{ padding: '12px 8px' }}>Status</th>
                    <th style={{ padding: '12px 8px', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPatientData.bills.map((bill) => (
                    <tr key={bill.id} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>{bill.id}</td>
                      <td style={{ padding: '12px 8px' }}>{bill.date}</td>
                      <td style={{ padding: '12px 8px' }}>{bill.service}</td>
                      <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>{bill.amount}</td>
                      <td style={{ padding: '12px 8px' }}>
                        <span className="badge badge-primary">{bill.status}</span>
                      </td>
                      <td style={{ padding: '12px 8px', textAlign: 'right' }}>
                        <button 
                          className="btn btn-outline" 
                          style={{ fontSize: '0.75rem', padding: '4px 8px' }}
                          onClick={() => alert(`Downloading Receipt for ${bill.id}...`)}
                        >
                          Receipt
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
