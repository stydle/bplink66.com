import React from 'react'
import styled from 'styled-components'
import Heading from '@/components/Heading/Heading'
import { constant } from '@/utils/utils'

interface PanelProps {
  title?: string
  display?: string
  children: React.ReactNode
}

const Panel = ({ title, display, children }: PanelProps) => {
  return (
    <Wrapper display={display}>
      {title && <Heading type="section-title">{title}</Heading>}
      <PanelContentWrapper>{children}</PanelContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section<{
  display?: string
}>`
  width: 100%;
  display: ${params => params.display || 'block'};
  overflow: hidden;
`

const PanelContentWrapper = styled.div`
  position: relative;
  line-height: ${constant('lineHeights.tall')};
  padding: 0 3px;
`

export { Wrapper as PanelWrapper }
export default Panel
