import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

import { color } from '@/utils/utils'

interface LinkProps {
  href: string
  rel?: string
  target?: string
  children?: React.ReactNode
}

const Link = ({ href, target, rel, ...delegated }: LinkProps) => {
  let linkType

  if (href.match(/^#/)) {
    linkType = 'hash'
  } else if (href.match(/(^http|^mailto)/i) || target === '_blank') {
    linkType = 'external'
  } else {
    linkType = 'internal'
  }

  if (typeof target === 'undefined') {
    target = linkType === 'external' ? '_blank' : undefined
  }

  const safeRel = target === '_blank' ? 'noopener noreferrer' : rel

  // 内部链接
  if (linkType === 'internal') {
    return (
      <InternalLink
        passHref
        href={href}
        rel={safeRel}
        target={target}
        {...delegated}
      />
    )
  }

  return (
    <InternalLink
      as="a"
      href={href}
      rel={safeRel}
      target={target}
      {...delegated}
    />
  )
}

const InternalLink = styled(NextLink)`
  text-decoration: none;
  transition: color 0.2s;
  color: ${color('link.text')};

  &:hover {
    color: ${color('link.active')};
    text-decoration: underline;
  }
`

export const UnstyledLink = styled(NextLink)<{
  display?: string
}>`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
  display: ${props => props.display || 'block'};

  &:focus {
    outline: none;
  }
`

export default Link
