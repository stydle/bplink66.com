import React from "react";
import styled from "styled-components";

import Head from "@/components/GlobalHead/Head";
import GlobalHeader from "@/components/GlobalHeader/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Footer from "@/components/GlobalFooter/Footer";
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
      <Head />
      <GlobalHeader />
      <Main>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </Main>
      <Footer />
    </Wrapper>
  );
}
