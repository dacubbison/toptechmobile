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
    fullContent: 'Buying a new car is exciting, but ensuring it\'s flawless is essential. Our New Car Check Out service includes a thorough examination for any hidden issues, such as manufacturing defects or transport damage. We inspect belts, brakes, hoses for wear or leaks; check all fluids; test windows, doors, locks, radio, and every button and feature for proper operation. Plus, a full systems scan detects any stored, cleared, or erased codes, and checks for recent battery disconnects that could mask problems. Drive with confidence knowing your new ride is road-ready.'
  },
  {
    slug: 'check-engine-light-diagnostic',
    title: 'Check Engine Light Diagnostic',
    desc: 'Full diagnostic scan, testing, and troubleshooting to pinpoint the root cause of your check engine light and resolve it accurately on the first visit.',
    image: '/images/check-engine-light.jpg', // Download from https://unsplash.com/photos/the-dashboard-of-a-car-with-a-key-in-it-2wGgZsEFQ-A and save as check-engine-light.jpg in /public/images
    calendlyLink: 'https://calendly.com/david-toptechmobile/check-engine-light-diagnostic-100',
    fullContent: 'A check engine light can signal anything from a minor sensor glitch to a serious issue—don\'t ignore it. Our diagnostic service uses advanced scanning tools to read error codes, followed by in-depth testing and troubleshooting to identify the true root cause. Whether it\'s emissions, fuel system, or electrical problems, we get it right the first time, saving you money on unnecessary repairs. Quick, mobile service means no towing or waiting at a shop.'
  },
  {
    slug: 'battery-electrical-check',
    title: 'No Start Service: Battery & Electrical Check',
    desc: 'Expert testing of battery, starter, alternator, and electrical systems to diagnose no-start issues, including load tests, voltage checks, and wiring inspections for reliable fixes.',
    image: '/images/battery-test-3.jpg',
    calendlyLink: 'https://calendly.com/david-toptechmobile/battery-electrical-check-80',
    fullContent: 'Stranded with a no-start? Our specialized service gets to the bottom of it fast. We perform thorough battery load and voltage tests to check capacity and health; inspect the starter for proper cranking and solenoid function; test the alternator for charging output; and scan electrical systems for faults, loose connections, or corroded wiring. From dead batteries to faulty ignitions, we diagnose and repair on-site, often same-day, so you\'re back on the road without the tow truck drama.'
  },
  {
    slug: 'general-vehicle-diagnostic',
    title: 'General Vehicle Diagnostic',
    desc: 'Broad-spectrum diagnostics for noises, vibrations, handling issues, broken components like windows or door handles, and other general concerns, using advanced tools for precise identification.',
    image: '/images/fuel-pump-repair.jpg',
    calendlyLink: 'https://calendly.com/david-toptechmobile/general-vehicle-diagnostic-100',
    fullContent: 'Not sure what\'s wrong? Our general diagnostic covers it all—from strange noises, bumps, or vibrations indicating suspension or drivetrain issues, to malfunctioning windows, door handles, or other accessories. We use state-of-the-art scanners and hands-on inspections to pinpoint problems like sensor failures, wiring glitches, or mechanical wear. Ideal for those "something\'s off" moments, ensuring safe, smooth driving without guesswork.'
  },
  {
    slug: 'ac-diagnostic-check',
    title: 'AC Diagnostic Check',
    desc: 'ASE and EPA 609-certified AC system evaluation, including pressure tests, refrigerant level checks, leak detection, and full recovery to protect the environment while restoring cool air.',
    image: '/images/ac-service.jpg',
    calendlyLink: 'https://calendly.com/david-toptechmobile/ac-diagnostic-check-80',
    fullContent: 'Texas heat demands a reliable AC—don\'t sweat it. As an ASE and EPA 609-certified technician, I use professional tools for pressure testing, refrigerant recovery (to avoid environmental harm), leak detection, and component checks like compressor, condenser, and evaporator. Whether it\'s low freon, clogged filters, or electrical faults, we diagnose accurately and repair efficiently on-site, getting your cool back without the shop wait.'
  },
  {
    slug: 'brake-inspection',
    title: 'Brake Inspection',
    desc: 'Detailed brake system evaluation, inspecting pads, rotors, shoes, hoses, lines for leaks or wear, fluid condition, and recommending necessary repairs for optimal safety.',
    image: '/images/brake-service-2.jpg',
    calendlyLink: 'https://calendly.com/david-toptechmobile/brake-inspection-80',
    fullContent: 'Brakes are your first line of safety—keep them sharp. Our inspection covers pad and shoe thickness, rotor surface condition (warping/cracks), caliper function, hose/line integrity for leaks, and brake fluid quality/hydraulics. We check for uneven wear, noises, or pedal issues, providing honest recommendations for replacements or adjustments. Mobile service means quick, convenient checks without disrupting your day.'
  },
  {
    slug: 'mobile-oil-change',
    title: 'Mobile Oil Change & Fluid Check',
    desc: 'Convenient on-site oil and filter change with premium synthetics, plus tire pressure adjustment, washer fluid top-off, and a preventive maintenance inspection to spot potential issues early.',
    image: '/images/mobile-oil-change-woodlands.jpg',
    calendlyLink: 'https://calendly.com/david-toptechmobile/mobil-1-oil-change-fluid-check-120',
    fullContent: 'Regular oil changes keep your engine humming—do it without the hassle. We use high-quality synthetic oils and filters, tailored to your vehicle, delivered right to you. Includes checking and topping off all fluids, adjusting tire pressures for safety and efficiency, and a full preventive inspection for leaks, belt wear, or other concerns. Catch small issues before they become big problems, all while you relax at home.'
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