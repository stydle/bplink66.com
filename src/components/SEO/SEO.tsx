import React from "react";
import { NextSeo } from "next-seo";
import SEO from "@/contents/settings/seo.json";

interface SEOProps {
  pageTitle?: string;
  seoTitle?: string;
  description?: string;
}

const defaultProps = {
  pageTitle: SEO.title,
  seoTitle: "",
  description: SEO.description
};

export default function Head({ pageTitle, seoTitle, description }: SEOProps) {
  return (
    <NextSeo
      title={pageTitle}
      description={description}
      canonical={SEO.url}
      openGraph={{
        title: seoTitle || pageTitle,
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
      facebook={{
        appId: SEO.facebook.appId
      }}
    />
  );
}

Head.defaultProps = defaultProps;
