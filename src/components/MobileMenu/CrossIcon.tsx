import { Wrapper } from './MenuIcon'
import { MobileMenuTypes } from './menu'

const CrossIcon = ({ isShow }: MobileMenuTypes) => {
  return (
    <Wrapper
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      show={isShow}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </Wrapper>
  )
}

export default CrossIcon
