import React from "react";
import styled from "styled-components";

import Config from "@/config/config";
import { color, constant } from "@/utils/utils";

import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Link, { UnstyledLink } from "../Link/Link";
import Heading from "../Heading/Heading";

const Wrapper = styled.footer`
  color: ${color("secondaryText")};
  background-color: ${color("secondaryBackground")};
  padding: ${constant("spacing.6")};

  @media ${(p) => p.theme.BREAKPOINTS.mdAndSmaller} {
    padding-left: ${constant("spacing.3")};
    padding-right: ${constant("spacing.3")};
  }
`;

const FooterGrid = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  gap: ${constant("spacing.4")};
  margin: 0 auto;

  @media ${(p) => p.theme.BREAKPOINTS.mdAndLarger} {
    display: grid;
    grid-template-areas:
      "logo logo logo"
      "nav1 nav2 nav3"
      "legal legal legal";
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const FooterLogo = styled.div`
  width: 100%;
  grid-area: logo;
  text-align: center;
  margin-bottom: ${constant("spacing.5")};
`;

const GreyLink = styled(UnstyledLink)`
  &:hover {
    color: ${color("text")};
  }
`;

const FooterDesktop = styled.p`
  margin: ${constant("spacing.1")};
  font-weight: ${constant("fontWeights.medium")};
`;

const FooterNav1 = styled.div`
  width: 100%;
  text-align: left;
  grid-area: nav1;
`;

const FooterNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${constant("spacing.4")};
  list-style: none;
  margin-left: 0;
`;

const FooterNavItem = styled.li``;

const FooterNav2 = styled.div`
  width: 100%;
  text-align: left;
  grid-area: nav2;
`;

const FooterNav3 = styled.div`
  width: 100%;
  text-align: left;
  grid-area: nav3;
`;

const FooterLegal = styled.div`
  font-size: ${constant("fontSizes.sm")};
  grid-area: legal;
  border-top-width: 1px;
  padding: ${constant("spacing.2")} 0;
  text-align: center;
`;

function GlobalFooter() {
  return (
    <Wrapper>
      <FooterGrid>
        <FooterLogo>
          <Heading>
            <Link href="/">{Config.name}</Link>
          </Heading>
          <FooterDesktop>Thanks for reading！</FooterDesktop>
        </FooterLogo>
        <FooterNav1>
          <FooterNavList>
            <FooterNavItem>
              <GreyLink href="/">Home</GreyLink>
            </FooterNavItem>
          </FooterNavList>
        </FooterNav1>
        <FooterNav2>
          <FooterNavList>
            <FooterNavItem>
              <GreyLink href="https://blog.bplink66.com" target="_blank">
                Blog
              </GreyLink>
            </FooterNavItem>
            <FooterNavItem>
              <GreyLink href="https://images.bplink66.com" target="_blank">
                Images
              </GreyLink>
            </FooterNavItem>
            <FooterNavItem>
              <GreyLink href="https://blog.bplink66.com/about" target="_blank">
                About me
              </GreyLink>
            </FooterNavItem>
          </FooterNavList>
        </FooterNav2>
        <FooterNav3>
          <FooterNavList>
            <FooterNavItem>
              <GreyLink href="https://github.com/stydle" target="_blank">
                Github
              </GreyLink>
            </FooterNavItem>
            <FooterNavItem>
              <GreyLink href="https://twitter.com/?lang=en" target="_blank">
                Twitter
              </GreyLink>
            </FooterNavItem>
          </FooterNavList>
        </FooterNav3>
        <FooterLegal>
          <p>© 2020-present Joshua Comeau. All Rights Reserved.</p>
        </FooterLegal>
      </FooterGrid>
    </Wrapper>
  );
}

export default GlobalFooter;
