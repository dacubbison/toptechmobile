import { Metadata } from 'next';

type Props = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export default function SeoTags({ title, description, url, image }: Props) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why winterize my mower in Texas?",
              "acceptedAnswer": { "@type": "Answer", "text": "Even mild winters can gum up carbs and corrode engines with ethanol gas. $129 special protects your $5k+ Bad Boy – fires up first try in March." }
            },
            // add all FAQs here – same as WinterizingFAQ component
          ]
        })
      }} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}