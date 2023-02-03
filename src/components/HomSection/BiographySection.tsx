import styled from 'styled-components'

import Image from 'next/image'
import Heading from '../Heading/Heading'
import { PanelWrapper } from '../Panel/Panel'
import Config from '@/config/config'
import { constant } from '@/utils/utils'

const BiographySection = () => {
  return (
    <Wrapper display="flex">
      <AuthContentWrapper>
        <Heading type="large-title">{Config.name}</Heading>
        <AuthorParagraph>{Config.describe}</AuthorParagraph>
      </AuthContentWrapper>
      <AuthorImageWrapper>
        <AuthorImage
          fill
          sizes="100vw"
          alt="use image"
          src={`/image/${Config.avatar}`}
        />
      </AuthorImageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(PanelWrapper)`
  margin-bottom: ${constant('spacing.4')};

  @media ${props => props.theme.BREAKPOINTS.mdAndSmaller} {
    text-align: center;
    flex-direction: column-reverse;
  }
`

const AuthorImageWrapper = styled.div`
  width: 125px;
  height: 125px;
  position: relative;
  margin-left: ${constant('spacing.8')};

  @media ${props => props.theme.BREAKPOINTS.mdAndSmaller} {
    margin: ${constant('spacing.3')} auto;
  }
`

const AuthorImage = styled(Image)`
  object-fit: cover;
  border-radius: ${constant('borderRadius.full')};
`

const AuthContentWrapper = styled.div`
  flex: 1;
  position: relative;
`

const AuthorParagraph = styled.p`
  text-align: justify;
  margin: ${constant('spacing.2')} 0;
`

export default BiographySection
