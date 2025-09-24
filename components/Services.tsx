const axios = require('axios');

async function decodeVIN() {
  // ... (your prev VIN code unchanged)
  await decodeVIN();

  // Map service to Calendly URL + Sheets desc
  const serviceMap = {
    'New Car Check Out $100': { url: 'https://calendly.com/david-toptechmobile/new-car-inspection-100', desc: 'New Car Check' },
    'Check Engine Light Diagnostic $100': { url: 'https://calendly.com/david-toptechmobile/check-engine-light-diagnostic-100', desc: 'Check Engine Light' },
    'Battery & Electrical Check $50': { url: 'https://calendly.com/david-toptechmobile/battery-electrical-check-80', desc: 'Battery Electrical Check' },
    'General Vehicle Diagnostic $50': { url: 'https://calendly.com/david-toptechmobile/general-vehicle-diagnostic-100', desc: 'General Diagnostic' },
    'AC Diagnostic Check $50 + freon': { url: 'https://calendly.com/david-toptechmobile/ac-diagnostic-check-80', desc: 'AC Check' },
    'Brake Inspection $50 (free w/ brake job)': { url: 'https://calendly.com/david-toptechmobile/brake-inspection-80', desc: 'Brake Inspection' },
    'Mobil 1 Oil Change & Fluid Check $120 (up to 6qts)': { url: 'https://calendly.com/david-toptechmobile/mobil-1-oil-change-fluid-check-120', desc: 'Oil Change' }
  };
  workflow.calendly_url = serviceMap[workflow.services]?.url || ''; // Fallback if mismatch
  workflow.services_desc = serviceMap[workflow.services]?.desc || workflow.services; // For Sheets
  workflow.date = new Date().toLocaleString(); // Update w/ Calendly later
}