import styled from 'styled-components'
import { MobileMenuTypes } from './menu'
import { color } from '@/utils/utils'

const MenuIcon = ({ isShow }: MobileMenuTypes) => {
  return (
    <Wrapper
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      show={isShow}
    >
      <path
        d="M2.5 5.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 10.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 15.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Wrapper>
  )
}

export const Wrapper = styled.svg<{
  show: boolean
}>`
  width: 1.25rem;
  height: 1.25rem;
  opacity: ${props => (props.show ? '1' : '0')};
  color: ${color('text')};
  vertical-align: middle;
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: absolute;
  transform: translate(-50%, -50%) scale(${props => (props.show ? '1' : '0')});
  top: 50%;
  left: 50%;
`

export default MenuIcon
