import React from "react";
import Config from "@/config/config";
import { NextSeo } from "next-seo";

const GENERIC_TITLE = `${Config.name}'s portal site`;
const GENERIC_DESCRIPTION =
  "Friendly tutorials for developers. Focus on React, CSS, Animation, and more!";

const PROD_URL = "https://www.bplink66.com";

interface MetaProps {
  title?: string;
  ogImage?: string;
  description?: string;
}

const defaultProps = {
  title: GENERIC_TITLE,
  ogImage: "favicons/og-default.png",
  description: GENERIC_DESCRIPTION
};

export default function Head({ title, ogImage, description }: MetaProps) {
  const meta = {
    title,
    description,
    image: `${PROD_URL}/${ogImage}`,
    type: "website",
    imgWidth: 850,
    imgHeight: 650
  };
  const pageTitle = "stydle";

  return (
    <NextSeo
      title={pageTitle}
      description={meta.description}
      canonical="https://www.bplink66.com/"
      openGraph={{
        title: pageTitle,
        description: Config.describe,
        url: "https://www.bplink66.com/",
        images: [
          {
            url: "/favicons/og-default.png",
            width: meta.imgWidth,
            height: meta.imgHeight,
            alt: "Photo of text"
          }
        ]
      }}
      twitter={{
        handle: "@stydle06",
        site: "@stydle06",
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
    />
  );
}

Head.defaultProps = defaultProps;
