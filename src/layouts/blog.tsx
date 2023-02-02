import React from 'react'
import styled from 'styled-components'

import Head from '@/components/GlobalHead/Head'
import GlobalHeader from '@/components/GlobalHeader/Header'
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper'
import Footer from '@/components/GlobalFooter/Footer'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Head />
      <GlobalHeader />
      <Main>
        <MaxWidthWrapper>{ children }</MaxWidthWrapper>
      </Main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 16px;
  min-height: 100vh;
  font-family: var(--body-font);
  color: var(--colors-text);
`;

const Main = styled.main`
  position: relative;
  padding: 0 var(--spacing-8);
  margin: var(--spacing-12) 0;

  @media ${(p) => p.theme.BREAKPOINTS.mdAndSmaller} {
    margin: var(--spacing-6) 0;
    padding: 0 var(--spacing-3);
  }
`;