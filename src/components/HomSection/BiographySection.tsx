import styled from 'styled-components'

import Image from 'next/image'
import Heading from '../Heading/Heading'
import { PanelWrapper } from '../Panel/Panel'
import Config from '@/config/config'

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
  margin-bottom: var(--spacing-4);

  @media ${props => props.theme.BREAKPOINTS.mdAndSmaller} {
    text-align: center;
    flex-direction: column-reverse;
  }
`

const AuthorImageWrapper = styled.div`
  width: 125px;
  height: 125px;
  position: relative;
  margin-left: var(--spacing-8);

  @media ${props => props.theme.BREAKPOINTS.mdAndSmaller} {
    margin: var(--spacing-3) auto;
  }
`;

const AuthorImage = styled(Image)`
  object-fit: cover;
  border-radius: var(--borderRadius-full);
`;

const AuthContentWrapper = styled.div`
  flex: 1;
  position: relative;
`;

const AuthorParagraph = styled.p`
  text-align: justify;
  margin: var(--spacing-2) 0;
`;

export default BiographySection;