import React from "react";
import styled from "styled-components";

import Image from "next/image";
import { skills } from "@/contents/skill";
import Heading from "@/components/Heading/Heading";
import { constant } from "@/utils/utils";
import Card from "../Card/Card";
import Panel from "../Panel/Panel";

const SkillsWrapper = styled.div`
  display: grid;
  gap: ${constant("spacing.4")};
  margin-bottom: ${constant("spacing.4")};
  grid-template-columns: repeat(4, 1fr);

  @media ${(props) => props.theme.BREAKPOINTS.mdAndSmaller} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${(props) => props.theme.BREAKPOINTS.smAndSmaller} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.BREAKPOINTS.xsAndSmaller} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardLogo = styled.div`
  margin: ${constant("spacing.3")};
  position: relative;
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 130px;
`;

const CardContent = styled.div`
  margin: ${constant("spacing.3")};
  text-align: center;
`;

export default function SkillsSection() {
  return (
    <Panel title="技能树">
      <SkillsWrapper>
        {skills.map((skill) => (
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
  );
}
