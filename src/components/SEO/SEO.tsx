import React from "react";
import { NextSeo } from "next-seo";
import SEO from "@/content/settings/seo.json";

interface SEOProps {
  pageTitle?: string;
  seoTitle?: string;
  description?: string;
  url?: string;
  image?: string;
}

const defaultProps = {
  pageTitle: SEO.title,
  seoTitle: "",
  description: SEO.description,
  url: SEO.url,
  image: ""
};

export default function Head({
  pageTitle,
  seoTitle,
  description,
  url,
  image
}: SEOProps) {
  return (
    <NextSeo
      title={pageTitle}
      description={description}
      canonical={url}
      openGraph={{
        title: seoTitle || pageTitle,
        type: "website",
        description,
        url,
        images: [
          {
            url: image || SEO.image.url,
            width: SEO.image.width,
            height: SEO.image.height,
            alt: pageTitle
          }
        ]
      }}
      twitter={{
        handle: SEO.twitter,
        site: SEO.twitter,
        cardType: "summary_large_image"
      }}
      additionalLinkTags={[
        {
          rel: "shortcut icon",
          href: "/favicons/favicon.ico"
        },
        {
          rel: "icon",
          href: "/favicons/favicon-32x32.png",
          sizes: "32x32"
        },
        {
          rel: "apple-touch-icon",
          href: "/favicons/apple-touch-icon.png",
          sizes: "180x180"
        },
        {
          rel: "manifest",
          href: "/favicons/manifest.json"
        },
        {
          rel: "mask-icon",
          href: "/favicons/safari-pinned-tab.svg",
          color: "#5bbad5"
        }
      ]}
    />
  );
}

Head.defaultProps = defaultProps;
