import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'

import { ContentContext } from '../ConfigContext/ConfigContext'
import MobileMenu from '../MobileMenu/MobileMenu'
import UnstyledButton from '../UnstyledButton/UnstyledButton'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import { color, constant } from '@/utils/utils'

function GlobalHeader() {
  const { colorMode, setColorMode } = useContext(ContentContext)
  const [mounted, setMounted] = useState(false)

  const isDark = colorMode === 'dark'

  function toggleColorMode(event) {
    event.preventDefault()
    setColorMode(isDark ? 'light' : 'dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Wrapper>
      <NavWrapper>
        <MobileMenu />

        <NavList>
          <NavItem href="/" $active={true}>
            首页
          </NavItem>
          <NavItem href="https://blog.bplink66.com">个人博客</NavItem>
        </NavList>

        <ThemeButton display="flex" onClick={toggleColorMode}>
          {mounted && (
            <ThemeWrapper
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              aria-hidden="true"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isDark ? (
                <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z" />
              ) : (
                <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
              )}
            </ThemeWrapper>
          )}
        </ThemeButton>
      </NavWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;
  padding: 0 ${constant('spacing.8')};

  @media ${p => p.theme.BREAKPOINTS.mdAndSmaller} {
    padding: 0 ${constant('spacing.3')};
  }
`

const NavWrapper = styled(MaxWidthWrapper)`
  display: flex;
  padding: ${constant('spacing.5')} 0;
  justify-content: space-between;
  line-height: ${constant('lineHeights.menu')};
  font-weight: ${constant('fontWeights.bold')};
`

const NavList = styled.div`
  height: 100%;
  margin-left: -0.6rem;

  @media ${props => props.theme.BREAKPOINTS.mdAndSmaller} {
    display: none;
  }
`

const NavItem = styled(NextLink)<{
  $active?: boolean
}>`
  display: inline-block;
  text-decoration: none;
  color: ${({ $active }) =>
    color($active ? 'text':'secondaryText')};
  padding: 0 ${constant('spacing.3')};
  margin-right: ${constant('spacing.1')};
  border-radius: ${constant('borderRadius.md')};
  transition: background 0.2s;

  &:hover {
    background-color: ${color('nav.bg')};
  }
`

const ThemeButton = styled(UnstyledButton)`
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: ${constant('borderRadius.md')};
  height: ${constant('sizes.icon')};
  width: ${constant('sizes.icon')};
  background-color: ${color('button.gray.bg')};

  &:hover {
    background-color: ${color('button.gray.active')};
  }
`

const ThemeWrapper = styled.svg`
  color: ${color('text')};
  width: 1.15rem;
  height: 1.15rem;
`

export default GlobalHeader
