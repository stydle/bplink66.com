import React from "react";
import styled, { css } from "styled-components";
import { color, constant } from "@/utils/utils";

const SectionTitle = styled.h1`
  margin: ${constant("spacing.5")} 0;
  padding-bottom: 0.25rem;
  position: relative;
  font-weight: ${constant("fontWeights.bold")};
  border-bottom-width: 1px;
  border-bottom-style: dashed;

  &::before {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -1px;
    display: block;
    width: 2rem;
    height: 2.5px;
    border-radius: ${constant("borderRadius.base")};
    box-shadow: ${color("heading.shadow")};
    background: ${color("heading.gradient")};
    transition: all 0.25s ease 0s;
    z-index: ${constant("zIndex.heading")};
  }
`;

const Basics = css`
  margin: 0;
  margin-inline: 0px;
  line-height: ${constant("lineHeights.shorter")};
`;

const LargeTitle = styled.h1`
  ${Basics}
  font-weight: ${constant("fontWeights.bold")};
  font-size: calc(32 / 16 * 1rem);
`;
const MediumTitle = styled.h2`
  ${Basics}
  font-weight: ${constant("fontWeights.bold")};
  font-size: calc(26 / 16 * 1rem);
`;
const SmallTitle = styled.h3`
  ${Basics}
  font-weight: ${constant("fontWeights.medium")};
  font-size: calc(18 / 16 * 1rem);
`;

interface ComponentProps {
  as?: string;
  children: React.ReactNode;
}
interface HeadingProps {
  type?: string;
  renderAs?: string;
  children: React.ReactNode;
}

const defaultProps = {
  type: "medium-title",
  renderAs: ""
};

export default function Heading({ type, renderAs, children }: HeadingProps) {
  let Component: React.FC<ComponentProps>;

  switch (type) {
    case "small-title":
      Component = SmallTitle;
      break;
    case "medium-title":
      Component = MediumTitle;
      break;
    case "large-title":
      Component = LargeTitle;
      break;
    case "section-title":
      Component = SectionTitle;
      break;
    default:
      throw new Error(`Unrecognized Heading type: ${type}`);
  }

  return <Component as={renderAs}>{children}</Component>;
}

Heading.defaultProps = defaultProps;
