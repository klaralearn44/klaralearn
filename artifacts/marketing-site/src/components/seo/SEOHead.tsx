import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { SITE_URL } from '@/site-config';
import { setServerSeo } from '@/seo-server-state';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  schema?: any;
}

export function SEOHead({ title, description, path, schema }: SEOHeadProps) {
  const [location] = useLocation();
  const isFinderAlias = location === '/finder-a-tutor';
  const url = `${SITE_URL}${isFinderAlias ? '/find-a-tutor' : path}`;
  const structuredData = schema ?? {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
  };
  const image = `${SITE_URL}/images/klara-school-tutoring.jpg`;

  if (import.meta.env.SSR) {
    setServerSeo({
      title,
      description,
      canonical: url,
      noindex: isFinderAlias,
      image,
      schema: structuredData,
    });
    return null;
  }
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {isFinderAlias && <meta name="robots" content="noindex, follow" />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
