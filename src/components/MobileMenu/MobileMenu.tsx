import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NextLink from 'next/link';
import MenuIcon from './MenuIcon';
import CrossIcon from './CrossIcon';
import UnstyledButton from '../UnstyledButton/UnstyledButton'

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Wrapper>
      <MobileIconBtn onClick={toggleMenu}>
        <MenuIcon isShow={!isMenuOpen} />
        <CrossIcon isShow={isMenuOpen} />
      </MobileIconBtn>

      {
        isMenuOpen && (
          <MobileMenuWrapper>
            <MobileMenuList>
              <MobileMenuItem>
                <MobileMenuLink href="/1">首页</MobileMenuLink>
              </MobileMenuItem>
              <MobileMenuItem>
                <MobileMenuLink href="/1">画廊</MobileMenuLink>
              </MobileMenuItem>
            </MobileMenuList>
          </MobileMenuWrapper>
        )
      }
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media ${props => props.theme.BREAKPOINTS.mdAndLarger} {
    display: none;
  }
`;

const MobileMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  z-index: var(--zIndex-menu);
  padding: var(--spacing-6) var(--spacing-4) 0;
  width: 100%;
  height: 100vh;
  background-color: var(--colors-background);
`

const MobileMenuList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  line-height: var(--lineHeights-base);
`;

const MobileMenuItem = styled.li`
  list-style: none;
  white-space: nowrap;
  border-bottom-width: 1px;
  &:not(:first-child) {
    margin-top: var(--spacing-6);
  }
`;

const MobileIconBtn = styled(UnstyledButton)`
  height: var(--sizes-icon);
  width: var(--sizes-icon);
  position: relative;
`

const MobileMenuLink = styled(NextLink)`
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 0 var(--spacing-1) var(--spacing-4);
`;

export default MobileMenu;