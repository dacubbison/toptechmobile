// app/blog/page.tsx
import Link from 'next/link';

const posts = [
  { slug: 'why-winterize-lawn-mower-woodlands-tx', title: 'Why Winterize Your Lawn Mower in The Woodlands TX: Top Tips from a Mobile Expert', excerpt: 'Even in mild Texas winters, winterizing protects your mower from corrosion and stale fuel. Learn why it\'s essential and how our $129 special keeps your equipment ready for spring in Montgomery County TX.', date: '2025-11-18' },
  { slug: 'winter-car-maintenance-tips-woodlands-tx', title: 'Winter Car Maintenance Tips for The Woodlands TX Drivers', excerpt: 'Prepare your vehicle for cooler months in The Woodlands TX. From battery checks to fluid top-offs, learn essential tips to avoid breakdowns in Montgomery County\'s variable weather.', date: '2025-11-11' },
  { slug: 'common-small-engine-problems-montgomery-county', title: 'Common Small Engine Problems and Fixes in Montgomery County TX', excerpt: 'From won\'t-start issues to carburetor clogs, discover frequent small engine problems and simple solutions for lawn mowers and generators in The Woodlands and Conroe.', date: '2025-11-04' },
  { slug: 'common-battery-issues-montgomery-county', title: 'Common Battery Issues in Montgomery County Winters', excerpt: 'Cold snaps can drain batteries fast in Montgomery County TX. Explore signs of failure and prevention strategies for reliable starts in Kingwood and The Woodlands.', date: '2025-10-28' },
  { slug: 'lawn-mower-maintenance-checklist-conroe', title: 'Lawn Mower Maintenance Checklist for Conroe Homeowners', excerpt: 'Keep your mower running smooth with this essential checklist: oil changes, blade sharpening, and more. Perfect for Conroe TX residents looking for mobile small engine repair tips.', date: '2025-10-21' },
  { slug: 'how-choose-tires-texas-roads-kingwood', title: 'How to Choose Tires for Texas Roads in Kingwood TX', excerpt: 'Navigate Kingwood\'s highways and backroads with the right tires. Tips on all-season vs. performance options for safety and efficiency in Montgomery County TX.', date: '2025-10-14' },
  { slug: 'zero-turn-mower-repair-kingwood-tx', title: 'Zero Turn Mower Repair: What Kingwood TX Landscapers Need to Know', excerpt: 'Specializing in Bad Boy, Scag, and Exmark – learn common zero turn issues and repair tips for efficient mowing in Kingwood. Includes winterization advice for longer equipment life.', date: '2025-10-07' },
  { slug: 'diy-vs-pro-small-engine-repair-north-houston', title: 'DIY vs. Professional Small Engine Repair in North Houston', excerpt: 'When to tackle lawn mower fixes yourself and when to call a mobile pro in North Houston TX. Covers tools, safety, and why expert service beats DIY for complex issues.', date: '2025-09-30' },
  { slug: 'choosing-right-mobile-mechanic-woodlands-tx', title: 'Choosing the Right Mobile Mechanic Service in The Woodlands TX', excerpt: 'With so many options, how do you pick a reliable mobile mechanic in The Woodlands TX? Learn key factors like certifications, reviews, and local expertise to make the best choice for your vehicle.', date: '2025-09-02' },
  { slug: 'preventive-maintenance-hybrid-vehicles-montgomery-county', title: 'Preventive Maintenance Tips for Hybrid Vehicles in Montgomery County', excerpt: 'Owning a hybrid in Montgomery County TX? Discover essential tips for battery care, regenerative braking, and more to keep your eco-friendly ride running efficiently in Texas heat.', date: '2025-08-26' },
  { slug: 'common-ac-issues-fixes-kingwood-tx', title: 'Common AC Issues and Fixes for Kingwood TX Drivers', excerpt: 'Struggling with weak AC in Kingwood TX? Explore frequent problems like refrigerant leaks or compressor failures, and how a mobile mechanic can diagnose and repair them on-site.', date: '2025-08-19' },
  { slug: 'how-mobile-mechanics-save-time-money-woodlands-tx', title: 'How Mobile Mechanics Save Time and Money in The Woodlands TX', excerpt: 'Discover the benefits of choosing a mobile mechanic in The Woodlands TX, from no-tow convenience to competitive pricing—perfect for busy locals in Montgomery County.', date: '2025-08-12' },
  { slug: 'top-signs-car-needs-repair-montgomery-county-tx', title: 'Top Signs Your Car Needs Immediate Repair in Montgomery County TX', excerpt: 'Don\'t ignore warning signs like strange noises or dashboard lights. Learn common indicators that your vehicle needs attention from a trusted mobile mechanic in Montgomery County TX.', date: '2025-08-05' },
  { slug: '5-reasons-mobile-mechanic', title: '5 Reasons You Need a Mobile Mechanic in The Woodlands TX', excerpt: 'In a world where time is money, discover how on-site auto repairs can transform your maintenance routine and save you from the hassle of traditional shops.', date: '2025-07-29' },
  { slug: 'ev-maintenance-tips', title: 'Essential EV Maintenance Tips for Montgomery County Drivers', excerpt: 'As electric vehicles surge in popularity, learn expert strategies to keep your EV performing at its best amid Texas\' challenging climate.', date: '2025-07-22' },
  { slug: 'brake-safety-guide', title: 'The Ultimate Brake Safety Guide: When and Why to Inspect in Kingwood TX', excerpt: 'Brakes are your vehicle\'s most critical safety feature—uncover the signs of wear, prevention tips, and why regular checks are non-negotiable for safe driving.', date: '2025-07-15' },
];

export default function Blog() {
  return (
    <main className="blog-main py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Top Tech Mobile Mechanic Blog</h1>
      <p className="text-center mb-10">Insights on auto repairs, small engine maintenance, winterization tips for The Woodlands TX drivers, and more from your local mobile mechanic and small engine repair expert.</p>
      <ul className="blog-list space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p className="text-gray-500 mb-2">{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}