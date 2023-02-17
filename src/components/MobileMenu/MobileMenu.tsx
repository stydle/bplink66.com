import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NextLink from "next/link";
import { color, constant } from "@/utils/utils";
import Nav from "@/content/settings/nav.json";
import MenuIcon from "./MenuIcon";
import CrossIcon from "./CrossIcon";
import UnstyledButton from "../UnstyledButton/UnstyledButton";

const Wrapper = styled.div`
  @media ${(props) => props.theme.BREAKPOINTS.mdAndLarger} {
    display: none;
  }
`;

const MobileMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  z-index: ${constant("zIndex.menu")};
  padding: ${constant("spacing.6")} ${constant("spacing.4")} 0;
  width: 100%;
  height: 100vh;
  background-color: ${color("background")};
`;

const MobileMenuList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  line-height: ${constant("lineHeights.base")};
`;

const MobileMenuItem = styled.li`
  list-style: none;
  white-space: nowrap;
  border-bottom-width: 1px;

  &:not(:first-child) {
    margin-top: ${constant("spacing.6")};
  }
`;

const MobileIconBtn = styled(UnstyledButton)`
  height: ${constant("sizes.icon")};
  width: ${constant("sizes.icon")};
  position: relative;
`;

const MobileMenuLink = styled(NextLink)`
  display: block;
  color: inherit;
  text-decoration: none;
  padding: ${constant("spacing.2")} ${constant("spacing.1")};
`;

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Wrapper>
      <MobileIconBtn onClick={toggleMenu}>
        <MenuIcon isShow={!isMenuOpen} />
        <CrossIcon isShow={isMenuOpen} />
      </MobileIconBtn>

      {isMenuOpen && (
        <MobileMenuWrapper>
          <MobileMenuList>
            {Nav.main.map((item) => (
              <MobileMenuItem key={item.id}>
                <MobileMenuLink href={item.path} target={item.target || ""}>
                  {item.title}
                </MobileMenuLink>
              </MobileMenuItem>
            ))}
          </MobileMenuList>
        </MobileMenuWrapper>
      )}
    </Wrapper>
  );
}
