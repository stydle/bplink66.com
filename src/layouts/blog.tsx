import React from "react";
import styled from "styled-components";

import SEO from "@/components/SEO/SEO";
import Header from "@/components/Header/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Footer from "@/components/Footer/Footer";
import { color, constant } from "@/utils/utils";

const Wrapper = styled.div`
  font-size: ${constant("body.size")};
  min-height: 100vh;
  font-family: ${constant("body.font")};
  color: ${color("text")};
`;
const Main = styled.main`
  position: relative;
  padding: 0 ${constant("spacing.8")};
  margin: ${constant("spacing.12")} 0;

  @media ${(p) => p.theme.BREAKPOINTS.mdAndSmaller} {
    margin: ${constant("spacing.6")} 0;
    padding: 0 ${constant("spacing.3")};
  }
`;

interface BlogProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogProps) {
  return (
    <Wrapper>
      <SEO />
      <Header />
      <Main>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </Main>
      <Footer />
    </Wrapper>
  );
}
