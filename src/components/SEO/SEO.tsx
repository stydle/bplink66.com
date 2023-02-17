import React from "react";
import { NextSeo } from "next-seo";
import SEO from "@/contents/settings/seo.json";

interface SEOProps {
  title?: string;
  seoTitle?: string;
  description?: string;
}

const defaultProps = {
  title: SEO.title,
  seoTitle: SEO.title,
  description: SEO.description
};

export default function Head({ title, seoTitle, description }: SEOProps) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={SEO.url}
      openGraph={{
        title: seoTitle,
        type: "website",
        description,
        url: SEO.url,
        images: SEO.images
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
          href: "/favicons/favicon-32x32.ico",
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
      facebook={{
        appId: SEO.facebook.appId
      }}
    />
  );
}

Head.defaultProps = defaultProps;
