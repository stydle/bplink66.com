import styled from "styled-components";
import { color, constant } from "@/utils/utils";

const Card = styled.div`
  overflow: hidden;
  border-radius: ${constant("borderRadius.md")};
  overflow-wrap: break-word;
  box-shadow: ${color("card.shadow")};
  transition: box-shadow 0.2s ease;
  background-color: ${color("card.bg")};

  &:hover {
    box-shadow: ${color("card.active")};
  }
`;
export default Card;
