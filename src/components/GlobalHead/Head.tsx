import React from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';

const GENERIC_DESCRIPTION =
  'Friendly tutorials for developers. Focus on React, CSS, Animation, and more!';

const PROD_URL = 'https://www.joshwcomeau.com';

const faviconSrc =
  process.env.NODE_ENV === 'production'
    ? '/favicons/favicon.jpg'
    : '/favicons/favicon-dev.jpg';

interface MetaProps {
  title?: string,
  ogImage?: string,
  description?: string,
}

function Head({
  description = '',
  title,
  ogImage,
}: MetaProps) {
  const router = useRouter();

  const meta = {
    title: title || "Baipc's Blog",
    description: description || GENERIC_DESCRIPTION,
    image: PROD_URL + (ogImage || '/favicons/og-default.jpg'),
    type: 'website',
    imageAlt: ogImage
    ? 'Banner for site, showing page title in a playful way'
    : 'Banner for joshwcomeau.com, featuring a word map and a cute 3D avatar'
  };

  return (
    <NextHead>
      <title>{ meta.title }</title>
      <meta charSet="utf-8" />
      <meta name="description" content={ meta.description } />

      {/* TODO: Are these necessary? */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <meta property="og:url" content={`${PROD_URL}${router.asPath}`} />
      <meta property="og:type" content={ meta.type } />
      <meta property="og:site_name" content="Xiao Bai" />
      <meta property="og:description" content={ meta.description } />
      <meta property="og:title" content={ meta.title } />
      <meta property="og:image" content={ meta.image } />
      <meta property="og:image:alt" content={ meta.imageAlt } />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="675" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@xiaoBai" />
      <meta name="twitter:title" content={ meta.title } />
      <meta name="twitter:description" content={ meta.description } />
      <meta name="twitter:image" content={ meta.image } />
      <meta name="theme-color" content="hsl(204deg, 67%, 85%)" />

      <link rel="icon" type="image/png" href={`${faviconSrc}?v=4`} />

      <link rel="canonical" href={`${PROD_URL}${router.asPath}`} />
    </NextHead>
  );
}

export default Head;