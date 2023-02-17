import React from "react";
import styled from "styled-components";

import Image from "next/image";
import { works } from "@/content/work";
import Tag from "@/components/Tag/Tag";
import Heading from "@/components/Heading/Heading";
import { color, constant } from "@/utils/utils";
import Card from "../Card/Card";
import Panel from "../Panel/Panel";
import { UnstyledLink } from "../Link/Link";

const WorksWrapper = styled.ul`
  margin-left: 0;
  display: grid;
  gap: ${constant("spacing.4")};
  margin-bottom: ${constant("spacing.4")};
  grid-template-columns: repeat(3, 1fr);

  @media ${(props) => props.theme.BREAKPOINTS.mdAndSmaller} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.BREAKPOINTS.smAndSmaller} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const WorksItem = styled.li`
  list-style: none;
`;

const CardLogo = styled.div`
  position: relative;
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  max-height: 320px;
  object-fit: contain;
`;

const CardContent = styled.div`
  padding: ${constant("spacing.1")} ${constant("spacing.3")}
    ${constant("spacing.4")};
`;

const WorksLevel = styled.p`
  color: ${color("secondaryText")};
`;

const CardFooter = styled.div`
  padding: ${constant("spacing.2")};
  border-top-width: 1px;
  ${Tag} + ${Tag} {
    margin-left: 8px;
  }
`;

export default function WorksSection() {
  return (
    <Panel title="作品集">
      <WorksWrapper>
        {works.map((work) => (
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
                  {work.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </CardFooter>
              </Card>
            </UnstyledLink>
          </WorksItem>
        ))}
      </WorksWrapper>
    </Panel>
  );
}
