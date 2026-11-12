// lib/services.ts
// Static data; replace with a DB/API if scaling up
const servicesData = [
  {
    slug: 'mobile-mechanic-the-woodlands-tx',
    title: 'Mobile Mechanic in The Woodlands TX',
    desc: 'On-site repairs and maintenance performed at your location for ultimate convenience.',
    image: '/images/mobile-mechanic-woodlands.jpg',
    calendlyLink: '', // No link, quote only
    fullContent: 'Experience the ease of professional auto repairs without leaving your home or office. As your trusted mobile mechanic in The Woodlands TX, I bring shop-quality tools and expertise directly to you, saving you time and hassle. Whether it\'s a quick fix or major repair, count on reliable, transparent service every time.'
  },
  {
    slug: 'new-car-check-out',
    title: 'New Car Check Out',
    desc: 'Comprehensive inspection for new vehicles, including safety checks, fluid levels, system scans, and full functionality testing to ensure everything operates perfectly from day one.',
    image: '/images/new-car-inspection.jpg', // Download from https://unsplash.com/photos/a-man-working-on-a-car-engine-in-a-garage-EJr3XkHdBm0 and save as new-car-inspection.jpg in /public/images
    calendlyLink: 'https://calendly.com/david-toptechmobile/new-car-inspection-100',
    fullContent: `Just bought a new or used vehicle? Don’t assume it’s perfect. Our New Car Check-Out is a comprehensive pre-delivery style inspection performed at your home.

We inspect:
- All fluids and filters
- Belts, hoses, and visible leaks
- Brake thickness and condition
- Tire condition and pressure
- Every electrical function (windows, locks, lights, HVAC, infotainment)
- Full systems scan for stored or pending codes and recent battery disconnects
- Undercarriage and basic suspension check

Especially valuable for vehicles purchased from dealers or private parties in The Woodlands, Conroe, or Kingwood area. Peace of mind before you drive it home.`
  },
  {
    slug: 'check-engine-light-diagnostic',
    title: 'Check Engine Light Diagnostic',
    desc: 'Full diagnostic scan, testing, and troubleshooting to pinpoint the root cause of your check engine light and resolve it accurately on the first visit.',
    image: '/images/check-engine-light.jpg', // Download from https://unsplash.com/photos/the-dashboard-of-a-car-with-a-key-in-it-2wGgZsEFQ-A and save as check-engine-light.jpg in /public/images
    calendlyLink: 'https://calendly.com/david-toptechmobile/check-engine-light-diagnostic-100',
    fullContent: `A check engine light can mean anything from a loose gas cap to a failing catalytic converter or oxygen sensor. In The Woodlands, Conroe, Kingwood, and across Montgomery County, we see these lights frequently due to Texas heat, humidity, and short-trip driving that never fully warms up the engine.

Our process is thorough and mobile:
1. Connect professional-grade scan tools to read all stored, pending, and permanent codes.
2. Review freeze-frame data to see the exact conditions when the light came on.
3. Perform live data testing and component checks (sensors, fuel trims, misfire counts, etc.).
4. Road-test when safe to confirm the issue.
5. Provide a clear explanation and repair options before any work begins.

We diagnose accurately the first visit so you don’t pay for parts you don’t need. Common local fixes include mass airflow sensors, EVAP leaks, coil packs, and catalytic efficiency codes. Service available throughout The Woodlands villages, Conroe, Kingwood, Humble, Porter, and Atascocita.`
  },
  {
    slug: 'battery-electrical-check',
    title: 'No Start Service: Battery & Electrical Check',
    desc: 'Expert testing of battery, starter, alternator, and electrical systems to diagnose no-start issues, including load tests, voltage checks, and wiring inspections for reliable fixes.',
    image: '/images/battery-test-3.jpg',
    calendlyLink: 'https://calendly.com/david-toptechmobile/battery-electrical-check-80',
    fullContent: `Heat kills batteries in Montgomery County. Slow cranking, clicking, or a complete no-start is common in The Woodlands, Conroe, Kingwood, and Atascocita after summer.

Our no-start / battery & electrical service includes:
- Battery load test and voltage/CCA check
- Alternator charging system test
- Starter draw and circuit testing
- Inspection of cables, grounds, and connections for corrosion
- Scan for related electrical or immobilizer issues

We can usually replace a bad battery or repair the charging system on the spot so you’re not stranded. Service available same-day in most cases across our coverage area.`
  },
  {
    slug: 'general-vehicle-diagnostic',
    title: 'General Vehicle Diagnostic',
    desc: 'Broad-spectrum diagnostics for noises, vibrations, handling issues, broken components like windows or door handles, and other general concerns, using advanced tools for precise identification.',
    image: '/images/fuel-pump-repair.jpg',
    calendlyLink: 'https://calendly.com/david-toptechmobile/general-vehicle-diagnostic-100',
    fullContent: `When something just “doesn’t feel right” — a new noise, vibration, rough idle, or warning light that isn’t the check engine — our general diagnostic gets to the bottom of it.

We use a combination of professional scan tools, live data, road testing, and hands-on inspection to identify the cause. Common local issues include:
- Suspension and steering wear from rough roads
- Transmission shift concerns
- Cooling system problems in Texas heat
- Electrical gremlins
- Exhaust or sensor issues

You get a clear diagnosis and repair options before any work is performed. Available at your location throughout The Woodlands, Conroe, Kingwood, and Montgomery County.`
  },
  {
    slug: 'ac-diagnostic-check',
    title: 'AC Diagnostic Check',
    desc: 'ASE and EPA 609-certified AC system evaluation, including pressure tests, refrigerant level checks, leak detection, and full recovery to protect the environment while restoring cool air.',
    image: '/images/ac-service.jpg',
    calendlyLink: 'https://calendly.com/david-toptechmobile/ac-diagnostic-check-80',
    fullContent: `Texas summers are brutal on air conditioning systems. Weak or warm air is one of the most common calls we get in The Woodlands, Kingwood, Conroe, and around Lake Conroe and Lake Houston.

As an ASE and EPA 609 certified technician, our mobile AC service includes:
- Pressure testing the system
- Proper refrigerant recovery and recharge (never venting to atmosphere)
- Leak detection with dye or electronic sniffer
- Inspection of compressor, condenser, evaporator, expansion valve/orifice tube, and electrical controls
- Condenser fan and blend door checks

We restore cold air at your home or office so you don’t sit in a hot waiting room. Available throughout Montgomery County.`
  },
  {
    slug: 'brake-inspection',
    title: 'Brake Inspection',
    desc: 'Detailed brake system evaluation, inspecting pads, rotors, shoes, hoses, lines for leaks or wear, fluid condition, and recommending necessary repairs for optimal safety.',
    image: '/images/brake-service-2.jpg',
    calendlyLink: 'https://calendly.com/david-toptechmobile/brake-inspection-80',
    fullContent: `Brakes are non-negotiable, especially with the stop-and-go traffic on I-45, Kingwood Drive, Research Forest, and FM 1960. We provide complete mobile brake inspections and service across The Woodlands, Conroe, Kingwood, and Montgomery County.

What we check and repair:
- Pad and shoe thickness and condition
- Rotor thickness, runout, and surface (warping or scoring is common in Texas heat)
- Caliper function and slide pins
- Brake hoses and lines for leaks or swelling
- Brake fluid condition and moisture content
- Parking brake operation

If replacement is needed, we install quality pads and rotors on-site and bed them in properly. You’ll get a clear report and options before any work. No shop wait, no towing.`
  },
  {
    slug: 'mobile-oil-change',
    title: 'Mobile Oil Change & Fluid Check',
    desc: 'Convenient on-site oil and filter change with premium synthetics, plus tire pressure adjustment, washer fluid top-off, and a preventive maintenance inspection to spot potential issues early.',
    image: '/images/mobile-oil-change-woodlands.jpg',
    calendlyLink: 'https://calendly.com/david-toptechmobile/mobil-1-oil-change-fluid-check-120',
    fullContent: `Skip the shop and get a proper oil change at your driveway or office parking lot in The Woodlands, Conroe, Kingwood, Humble, or anywhere in Montgomery County.

What’s included:
- High-quality synthetic oil matched to your vehicle’s specification
- New oil filter
- Top-off of all other fluids (coolant, brake, power steering, washer)
- Tire pressure adjustment
- Multi-point inspection (belts, hoses, leaks, battery, lights, wipers)
- Reset of oil life monitor

We catch small issues early while you stay home. Perfect for busy schedules across the north Houston suburbs.`
  },
  {
    slug: 'car-accessories-installation',
    title: 'Car Accessories Installation',
    desc: 'Mobile installation for dash cams, GPS, and other accessories.',
    image: '/images/car-install-montgomerytx.jpg',
    calendlyLink: '', // No link, quote only
    fullContent: 'Enhance your ride with professional on-site accessory installs. From dash cams for safety footage to GPS trackers for navigation and security, we handle wiring, mounting, and setup without the shop trip. Custom solutions for audio upgrades, lighting, or tech add-ons—get a quote for seamless integration.'
  },
  {
    slug: 'fleet-maintenance',
    title: 'Fleet Maintenance',
    desc: 'Custom plans for business fleets with on-site service.',
    image: '/images/fleet-repair-montgomerytx.jpg',
    calendlyLink: '', // No link, quote only
    fullContent: 'Keep your business fleet rolling without downtime. Our customized on-site maintenance plans include scheduled inspections, repairs, and preventive care for multiple vehicles. From oil changes to diagnostics, we tailor services to your needs—contact us for a free fleet consultation and quote.'
  },
  {
    slug: 'hybrid-ev-repair',
    title: 'Hybrid & EV Repair',
    desc: 'Specialized mobile repair for hybrid and electric vehicles.',
    image: '/images/hybrid-ev.jpg',
    calendlyLink: '', // No link, quote only
    fullContent: 'Expert care for your eco-friendly ride. As hybrid/EV specialists, we handle battery diagnostics, regenerative braking, electric motor issues, and charging system repairs on-site. Stay green and efficient—get a quote for specialized service without the dealership wait.'
  },
  // Add more services from your real website if needed (e.g., tune-ups, fuel injection) without pricing mentions
];
export function getAllServices() {
  return servicesData;
}
export function getServiceBySlug(slug: string) {
  return servicesData.find((service) => service.slug === slug) || null;
}