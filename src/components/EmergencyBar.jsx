import React from 'react';
import { PhoneCall, AlertTriangle, ShieldAlert } from 'lucide-react';

export default function EmergencyBar() {
  return (
    <div className="emergency-bar">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <AlertTriangle size={18} />
          <strong>24/7 Medical Emergency Hotline:</strong>
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '1.05rem' }}>
          <PhoneCall size={16} />
          <a href="tel:18005559911" style={{ color: '#ffffff', fontWeight: 'bold', textDecoration: 'underline' }}>1-800-555-9911</a>
        </span>
        <span style={{ margin: '0 8px' }}>|</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <ShieldAlert size={16} />
          Ambulance dispatch & trauma care available immediately
        </span>
      </div>
    </div>
  );
}
