// app/blog/page.tsx
import Link from 'next/link';
const posts = [
  { slug: 'choosing-right-mobile-mechanic-woodlands-tx', title: 'Choosing the Right Mobile Mechanic Service in The Woodlands TX', excerpt: 'With so many options, how do you pick a reliable mobile mechanic in The Woodlands TX? Learn key factors like certifications, reviews, and local expertise to make the best choice for your vehicle.', date: '2025-09-02' },
  { slug: 'preventive-maintenance-hybrid-vehicles-montgomery-county', title: 'Preventive Maintenance Tips for Hybrid Vehicles in Montgomery County', excerpt: 'Owning a hybrid in Montgomery County TX? Discover essential tips for battery care, regenerative braking, and more to keep your eco-friendly ride running efficiently in Texas heat.', date: '2025-08-26' },
  { slug: 'common-ac-issues-fixes-kingwood-tx', title: 'Common AC Issues and Fixes for Kingwood TX Drivers', excerpt: 'Struggling with weak AC in Kingwood TX? Explore frequent problems like refrigerant leaks or compressor failures, and how a mobile mechanic can diagnose and repair them on-site.', date: '2025-08-19' },
  { slug: 'how-mobile-mechanics-save-time-money-woodlands-tx', title: 'How Mobile Mechanics Save Time and Money in The Woodlands TX', excerpt: 'Discover the benefits of choosing a mobile mechanic in The Woodlands TX, from no-tow convenience to competitive pricing—perfect for busy locals in Montgomery County.', date: '2025-08-12' },
  { slug: 'top-signs-car-needs-repair-montgomery-county-tx', title: 'Top Signs Your Car Needs Immediate Repair in Montgomery County TX', excerpt: 'Don\'t ignore warning signs like strange noises or dashboard lights. Learn common indicators that your vehicle needs attention from a trusted mobile mechanic in Montgomery County TX.', date: '2025-08-05' },
  { slug: '5-reasons-mobile-mechanic', title: '5 Reasons You Need a Mobile Mechanic in The Woodlands TX', excerpt: 'In a world where time is money, discover how on-site auto repairs can transform your maintenance routine and save you from the hassle of traditional shops.', date: '2025-07-29' }, // Monday
  { slug: 'ev-maintenance-tips', title: 'Essential EV Maintenance Tips for Montgomery County Drivers', excerpt: 'As electric vehicles surge in popularity, learn expert strategies to keep your EV performing at its best amid Texas\' challenging climate.', date: '2025-07-22' }, // Monday
  { slug: 'brake-safety-guide', title: 'The Ultimate Brake Safety Guide: When and Why to Inspect in Kingwood TX', excerpt: 'Brakes are your vehicle\'s most critical safety feature—uncover the signs of wear, prevention tips, and why regular checks are non-negotiable for safe driving.', date: '2025-07-15' }, // Monday
  // Add more posts here, dated to previous Mondays
];
export default function Blog() {
  return (
    <main className="blog-main py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Top Tech Mobile Mechanic Blog</h1>
      <p className="text-center mb-10">Insights on auto repairs, tips for The Woodlands TX drivers, and more from your local mobile mechanic near me.</p>
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