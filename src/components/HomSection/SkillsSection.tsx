import styled from 'styled-components'

import Image from 'next/image'
import Panel from '../Panel/Panel'
import Card from '../Card/Card'
import { skills } from '@/contents/skill'
import Heading from '@/components/Heading/Heading'

const SkillsSection = () => {
  return (
    <Panel title="技能树">
      <SkillsWrapper>
        {skills.map(skill => (
          <Card key={skill.id}>
            <CardLogo>
              <CardImage
                src={skill.image}
                alt={`${skill.name} logo`}
                sizes="100vw"
              />
            </CardLogo>
            <CardContent>
              <Heading type="small-title">{skill.name}</Heading>
            </CardContent>
          </Card>
        ))}
      </SkillsWrapper>
    </Panel>
  )
}

const SkillsWrapper = styled.div`
  display: grid;
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-4);
  grid-template-columns: repeat(4, 1fr);

  @media ${props => props.theme.BREAKPOINTS.mdAndSmaller} {
    gap: var(--spacing-4);
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${props => props.theme.BREAKPOINTS.smAndSmaller} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${props => props.theme.BREAKPOINTS.xsAndSmaller} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const CardLogo = styled.div`
  margin: var(--spacing-3);
  position: relative;
`

const CardImage = styled(Image)`
  width: 100%;
  height: 130px;
`

const CardContent = styled.div`
  margin: var(--spacing-3);
  text-align: center;
`

export default SkillsSection
