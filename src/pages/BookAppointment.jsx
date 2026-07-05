import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, User, Calendar, MessageSquare, Phone, Mail, Award } from 'lucide-react';
import { doctors, services } from '../data';

export default function BookAppointment() {
  const [searchParams] = useSearchParams();
  const docParam = searchParams.get('doctor');
  const deptParam = searchParams.get('department');

  const [step, setStep] = useState(1);
  
  // Form State
  const [formData, setFormData] = useState({
    department: deptParam || "",
    doctor: docParam || "",
    date: "",
    timeSlot: "",
    name: "",
    phone: "",
    email: "",
    reason: ""
  });

  const [availableDoctors, setAvailableDoctors] = useState(doctors);

  // Sync available doctors when department changes
  useEffect(() => {
    if (formData.department) {
      // Map department ID to doctor specialty keyword
      // e.g. "general-medicine" -> "General Physician"
      const deptKeywords = {
        "general-medicine": "General Physician",
        "pediatrics": "Pediatrician",
        "orthopedics": "Orthopedic Surgeon",
        "cardiology": "Cardiologist",
        "dermatology": "Dermatologist"
      };
      
      const filterKeyword = deptKeywords[formData.department];
      if (filterKeyword) {
        const filtered = doctors.filter(doc => doc.specialization.includes(filterKeyword));
        setAvailableDoctors(filtered);
        
        // Reset doctor selection if the current one is not in the filtered list
        if (formData.doctor && !filtered.some(d => d.id === formData.doctor)) {
          setFormData(prev => ({ ...prev, doctor: "" }));
        }
      }
    } else {
      setAvailableDoctors(doctors);
    }
  }, [formData.department]);

  // Sync department when doctor changes
  useEffect(() => {
    if (formData.doctor && !formData.department) {
      const doc = doctors.find(d => d.id === formData.doctor);
      if (doc) {
        const specialty = doc.specialization;
        let deptId = "";
        if (specialty.includes("General Physician")) deptId = "general-medicine";
        else if (specialty.includes("Pediatrician")) deptId = "pediatrics";
        else if (specialty.includes("Orthopedic Surgeon")) deptId = "orthopedics";
        else if (specialty.includes("Cardiologist")) deptId = "cardiology";
        else if (specialty.includes("Dermatologist")) deptId = "dermatology";

        if (deptId) {
          setFormData(prev => ({ ...prev, department: deptId }));
        }
      }
    }
  }, [formData.doctor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.department || !formData.doctor)) {
      alert("Please select both a department and a doctor.");
      return;
    }
    if (step === 2 && (!formData.date || !formData.timeSlot)) {
      alert("Please select an appointment date and time slot.");
      return;
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please complete the required contact fields.");
      return;
    }
    setStep(4); // Success step
  };

  const selectedDocInfo = doctors.find(d => d.id === formData.doctor);

  const timeSlots = [
    "09:00 AM - 09:30 AM",
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "12:00 PM - 12:30 PM",
    "02:00 PM - 02:30 PM",
    "03:00 PM - 03:30 PM",
    "04:00 PM - 04:30 PM",
    "05:00 PM - 05:30 PM"
  ];

  return (
    <div className="container section">
      <div className="text-center max-w-3xl">
        <h1 className="section-title">Book an Appointment</h1>
        <p className="section-subtitle">Schedule your medical consult easily. Follow our simple multi-step form to reserve your slot.</p>
      </div>

      <div className="card max-w-3xl" style={{ margin: '0 auto', padding: '40px' }}>
        {/* Stepper Header */}
        {step < 4 && (
          <div className="stepper">
            <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>1</div>
            <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>2</div>
            <div className={`step ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>3</div>
          </div>
        )}

        {/* Step 1: Dept & Doctor */}
        {step === 1 && (
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <User size={20} style={{ color: 'var(--primary)' }} /> Select Department & Specialist
            </h3>

            <div className="form-group">
              <label htmlFor="department">Medical Department *</label>
              <select
                id="department"
                name="department"
                className="form-control"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                {services.map(svc => (
                  <option key={svc.id} value={svc.id}>{svc.title}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="doctor">Preferred Doctor *</label>
              <select
                id="doctor"
                name="doctor"
                className="form-control"
                value={formData.doctor}
                onChange={handleChange}
              >
                <option value="">Select Doctor</option>
                {availableDoctors.map(doc => (
                  <option key={doc.id} value={doc.id}>{doc.name} ({doc.specialization})</option>
                ))}
              </select>
            </div>

            {selectedDocInfo && (
              <div style={{ display: 'flex', gap: '16px', marginTop: '24px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', alignItems: 'center' }}>
                <img 
                  src={selectedDocInfo.photo} 
                  alt={selectedDocInfo.name} 
                  style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ fontSize: '0.95rem', margin: 0 }}>{selectedDocInfo.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: '2px 0 0 0' }}>
                    Available: {selectedDocInfo.timings}
                  </p>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
              <button className="btn btn-primary" onClick={nextStep}>Next: Date & Time</button>
            </div>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={20} style={{ color: 'var(--primary)' }} /> Choose Appointment Date & Time
            </h3>

            <div className="form-group">
              <label htmlFor="date">Consultation Date *</label>
              <input
                id="date"
                type="date"
                name="date"
                className="form-control"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Available Time Slots *</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginTop: '8px' }}>
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`btn ${formData.timeSlot === slot ? 'btn-primary' : 'btn-outline'}`}
                    style={{ fontSize: '0.85rem', padding: '10px' }}
                    onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot }))}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
              <button className="btn btn-outline" onClick={prevStep}>Back</button>
              <button className="btn btn-primary" onClick={nextStep}>Next: Patient Info</button>
            </div>
          </div>
        )}

        {/* Step 3: Contact & Info */}
        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare size={20} style={{ color: 'var(--primary)' }} /> Patient Details
            </h3>

            <div className="form-group">
              <label htmlFor="name">Patient Full Name *</label>
              <div style={{ position: 'relative' }}>
                <User size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-light)' }} />
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="form-control"
                  style={{ paddingLeft: '36px' }}
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <div style={{ position: 'relative' }}>
                  <Phone size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-light)' }} />
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone"
                    className="form-control"
                    style={{ paddingLeft: '36px' }}
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-light)' }} />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="form-control"
                    style={{ paddingLeft: '36px' }}
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reason">Reason for Visit / Symptoms</label>
              <textarea
                id="reason"
                name="reason"
                placeholder="Briefly describe your medical concern (e.g. checkup, routine vaccination)"
                className="form-control"
                value={formData.reason}
                onChange={handleChange}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
              <button type="button" className="btn btn-outline" onClick={prevStep}>Back</button>
              <button type="submit" className="btn btn-primary">Submit Booking</button>
            </div>
          </form>
        )}

        {/* Step 4: Success Details */}
        {step === 4 && (
          <div className="text-center" style={{ padding: '20px 0' }}>
            <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', backgroundColor: '#dcfce7', color: 'var(--primary)', marginBottom: '24px' }}>
              <CheckCircle2 size={48} />
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Appointment Confirmed!</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '32px' }}>
              Thank you, <strong>{formData.name}</strong>. Your appointment has been booked. A confirmation SMS and email have been sent.
            </p>

            <div className="card text-left" style={{ backgroundColor: '#f8fafc', marginBottom: '32px', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '1.05rem', borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginBottom: '12px' }}>Booking Summary</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                <li><strong>Doctor:</strong> {selectedDocInfo ? selectedDocInfo.name : "Specialist"}</li>
                <li><strong>Department:</strong> {services.find(s => s.id === formData.department)?.title}</li>
                <li><strong>Date:</strong> {formData.date}</li>
                <li><strong>Time:</strong> {formData.timeSlot}</li>
                <li><strong>Patient Email:</strong> {formData.email}</li>
              </ul>
            </div>

            <button 
              className="btn btn-primary" 
              onClick={() => {
                setStep(1);
                setFormData({
                  department: "",
                  doctor: "",
                  date: "",
                  timeSlot: "",
                  name: "",
                  phone: "",
                  email: "",
                  reason: ""
                });
              }}
            >
              Book Another Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
