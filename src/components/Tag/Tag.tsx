import styled from "styled-components";
import { constant } from "@/utils/utils";

const Tag = styled.span`
  display: inline-block;
  font-size: ${constant("fontSizes.sm")};
  line-height: ${constant("lineHeights.tall")};
  padding: 0 ${constant("spacing.3")};
  min-height: ${constant("sizes.tag")};
  border-radius: ${constant("borderRadius.base")};
  border-width: 1px;
  margin: 0 ${constant("spacing.1")};
`;

export default Tag;
