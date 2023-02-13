import React from "react";
import NextLink from "next/link";
import styled from "styled-components";

import { color } from "@/utils/utils";

const InternalLink = styled(NextLink)`
  text-decoration: none;
  transition: color 0.2s;
  color: ${color("link.text")};

  &:hover {
    color: ${color("link.active")};
    text-decoration: underline;
  }
`;

export const UnstyledLink = styled(NextLink)<{
  display?: string;
}>`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
  display: ${(props) => props.display || "block"};

  &:focus {
    outline: none;
  }
`;

interface LinkProps {
  href: string;
  rel?: string;
  target?: string;
  children: React.ReactNode;
}

const defaultProps = {
  rel: "",
  target: ""
};

function Link({ href, target, rel, children }: LinkProps) {
  let linkType;
  let newTarget = target;

  if (href.match(/^#/)) {
    linkType = "hash";
  } else if (href.match(/(^http|^mailto)/i) || newTarget === "_blank") {
    linkType = "external";
  } else {
    linkType = "internal";
  }

  if (typeof newTarget === "undefined") {
    newTarget = linkType === "external" ? "_blank" : undefined;
  }

  const safeRel = newTarget === "_blank" ? "noopener noreferrer" : rel;

  // 内部链接
  if (linkType === "internal") {
    return (
      <InternalLink passHref href={href} rel={safeRel} target={newTarget}>
        {children}
      </InternalLink>
    );
  }

  return (
    <InternalLink as="a" href={href} rel={safeRel} target={newTarget}>
      {children}
    </InternalLink>
  );
}

Link.defaultProps = defaultProps;

export default Link;
