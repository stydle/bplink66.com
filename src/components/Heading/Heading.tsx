import React from 'react'
import styled, { css } from 'styled-components'

interface HeadingProps {
  type?: string,
  renderAs?: string
  children: React.ReactNode,
}

const Heading = ({
  type = 'medium-title',
  renderAs,
  ...delegated
}: HeadingProps) => {
  let Component;
  if (type === 'small-title') {
    Component = SmallTitle;
  } else if (type === 'medium-title') {
    Component = MediumTitle;
  } else if (type === 'large-title') {
    Component = LargeTitle;
  } else if (type === 'section-title') {
    Component = SectionTitle;
  } else {
    throw new Error('Unrecognized Heading type: ' + type);
  }

  return <Component as={renderAs} {...delegated} />;
};

const SectionTitle = styled.h1`
  margin: var(--spacing-5) 0;
  padding-bottom: 0.25rem;
  position: relative;
  font-weight: var(--fontWeights-bold);
  border-bottom-width: 1px;
  border-bottom-style: dashed;

  &::before{
    content: "";
    position: absolute;
    left: 0px;
    bottom: -1px;
    display: block;
    width: 2rem;
    height: 2.5px;
    border-radius: var(--borderRadius-base);
    box-shadow: var(--colors-heading-shadow);
    background: var(--colors-heading-gradient);
    transition: all 0.25s ease 0s;
    z-index: var(--zIndex-heading);
  }
`;

const Basics = css`
  margin: 0;
  margin-inline: 0px;
  line-height: var(--lineHeights-shorter);
`;

const LargeTitle = styled.h1`
  ${Basics}
  font-weight: var(--fontWeights-bold);
  font-size: calc(32 / 16 * 1rem);
`;
const MediumTitle = styled.h2`
  ${Basics}
  font-weight: var(--fontWeights-bold);
  font-size: calc(26 / 16 * 1rem);
`;
const SmallTitle = styled.h3`
  ${Basics}
  font-weight: var(--fontWeights-medium);
  font-size: calc(18 / 16 * 1rem);
`;

export default Heading;
