import styled from 'styled-components'

import Image from 'next/image'
import { UnstyledLink } from '../Link/Link'
import { works } from '@/contents/work'
import Panel from '../Panel/Panel'
import Card from '../Card/Card'
import Tag from '@/components/Tag/Tag'
import Heading from '@/components/Heading/Heading'

const WorksSection = () => {
  return (
    <Panel title="作品集">
      <WorksWrapper>
        {works.map(work => (
          <WorksItem key={work.id}>
            <UnstyledLink href={work.url} target="_blank">
              <Card>
                <CardLogo>
                  <CardImage
                    src={work.image}
                    alt={`${work.name} cover`}
                    sizes="100vw"
                  />
                </CardLogo>
                <CardContent>
                  <Heading type="small-title">{work.name}</Heading>
                  <WorksLevel>{work.year}</WorksLevel>
                </CardContent>
                <CardFooter>
                  {work.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </CardFooter>
              </Card>
            </UnstyledLink>
          </WorksItem>
        ))}
      </WorksWrapper>
    </Panel>
  )
}

const WorksWrapper = styled.ul`
  margin-left: 0;
  display: grid;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-4);
  grid-template-columns: repeat(3, 1fr);

  @media ${props => props.theme.BREAKPOINTS.mdAndSmaller} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${props => props.theme.BREAKPOINTS.smAndSmaller} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const WorksItem = styled.li`
  list-style: none;
`

const CardLogo = styled.div`
  position: relative;
`

const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  max-height: 320px;
  object-fit: contain;
`

const CardContent = styled.div`
  padding: var(--spacing-1) var(--spacing-3) var(--spacing-4);
`

const WorksLevel = styled.p`
  color: var(--colors-secondaryText);
`

const CardFooter = styled.div`
  padding: var(--spacing-2);
  border-top-width: 1px;
  ${Tag} + ${Tag} {
    margin-left: 8px;
  }
`

export default WorksSection
