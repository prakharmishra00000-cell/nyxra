import React, { useState } from 'react';
import { Search, Upload, ShoppingBag, Truck, CheckCircle, AlertCircle } from 'lucide-react';

export default function Pharmacy() {
  const [searchTerm, setSearchTerm] = useState("");
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [deliveryData, setDeliveryData] = useState({
    name: "",
    address: "",
    phone: "",
    medicineList: ""
  });
  const [deliverySubmitted, setDeliverySubmitted] = useState(false);

  const mockMeds = [
    { name: "Paracetamol 650mg", brand: "Dolo-650", price: "₹30 / strip", availability: "In Stock" },
    { name: "Metformin 500mg", brand: "Glycomet", price: "₹45 / strip", availability: "In Stock" },
    { name: "Atorvastatin 10mg", brand: "Lipvas", price: "₹85 / strip", availability: "In Stock" },
    { name: "Amoxicillin 500mg", brand: "Novamox", price: "₹72 / strip", availability: "In Stock" },
    { name: "Montelukast 10mg", brand: "Montair", price: "₹120 / strip", availability: "Limited Stock" },
    { name: "Insulin Glargine 100 IU", brand: "Lantus", price: "₹650 / vial", availability: "In Stock" }
  ];

  const filteredMeds = mockMeds.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    med.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeliverySubmit = (e) => {
    e.preventDefault();
    if (!deliveryData.name || !deliveryData.address || !deliveryData.phone) {
      alert("Please fill in contact name, phone, and delivery address.");
      return;
    }
    setDeliverySubmitted(true);
    setDeliveryData({ name: "", address: "", phone: "", medicineList: "" });
    setPrescriptionFile(null);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
    }
  };

  return (
    <div className="container section">
      <div className="text-center max-w-3xl">
        <h1 className="section-title">In-House Pharmacy & Delivery</h1>
        <p className="section-subtitle">Check medication availability, upload prescriptions, and order home delivery of medications.</p>
      </div>

      <div className="grid-2" style={{ gap: '40px', alignItems: 'flex-start' }}>
        {/* Left column: Medicine Search */}
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} style={{ color: 'var(--primary)' }} /> Search Medicine Inventory
          </h3>
          
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-light)' }} />
            <input
              type="text"
              placeholder="Search by salt name or brand (e.g. Paracetamol, Lantus)..."
              className="form-control"
              style={{ paddingLeft: '40px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredMeds.map((med, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: '#f8fafc' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', margin: 0 }}>{med.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: '2px 0 0 0' }}>Brand: {med.brand} &bull; <strong>{med.price}</strong></p>
                </div>
                <span className="badge badge-primary" style={{ height: 'fit-content' }}>{med.availability}</span>
              </div>
            ))}
            {filteredMeds.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '20px 0' }}>No medicines matched your search.</p>
            )}
          </div>
        </div>

        {/* Right column: Delivery & Prescription Upload */}
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Truck size={20} style={{ color: 'var(--primary)' }} /> Order Home Delivery
          </h3>

          {deliverySubmitted ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', backgroundColor: '#dcfce7', color: 'var(--primary)', marginBottom: '16px' }}>
                <CheckCircle size={28} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Delivery Order Placed!</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '24px' }}>
                Our pharmacist will call you within 30 minutes to confirm your medicine list and calculate final pricing.
              </p>
              <button className="btn btn-primary" onClick={() => setDeliverySubmitted(false)}>Order More</button>
            </div>
          ) : (
            <form onSubmit={handleDeliverySubmit}>
              <div className="form-group">
                <label>Upload Rx Prescription Document (Optional)</label>
                <div style={{ 
                  border: '2px dashed var(--border)', 
                  padding: '20px', 
                  borderRadius: '8px', 
                  textAlign: 'center',
                  backgroundColor: '#f8fafc',
                  cursor: 'pointer',
                  position: 'relative'
                }}>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}
                    onChange={handleFileChange}
                  />
                  <Upload size={24} style={{ color: 'var(--text-light)', margin: '0 auto 8px auto' }} />
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: 0 }}>
                    {prescriptionFile ? `Selected: ${prescriptionFile.name}` : "Drag and drop or click to upload PDF/Image"}
                  </p>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pharmacy-name">Patient Name *</label>
                <input
                  id="pharmacy-name"
                  type="text"
                  placeholder="Arnav Malhotra"
                  className="form-control"
                  required
                  value={deliveryData.name}
                  onChange={(e) => setDeliveryData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pharmacy-phone">Contact Phone *</label>
                <input
                  id="pharmacy-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="form-control"
                  required
                  value={deliveryData.phone}
                  onChange={(e) => setDeliveryData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pharmacy-meds">Enter Medicines (if not uploading prescription)</label>
                <textarea
                  id="pharmacy-meds"
                  placeholder="e.g. Dolo-650 (1 strip), Metformin 500mg (2 strips)"
                  className="form-control"
                  value={deliveryData.medicineList}
                  onChange={(e) => setDeliveryData(prev => ({ ...prev, medicineList: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pharmacy-addr">Delivery Address *</label>
                <textarea
                  id="pharmacy-addr"
                  placeholder="Full physical address for delivery"
                  className="form-control"
                  required
                  value={deliveryData.address}
                  onChange={(e) => setDeliveryData(prev => ({ ...prev, address: e.target.value }))}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Request Home Delivery
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
