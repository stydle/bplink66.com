import styled from "styled-components";

export default styled.button<{
  display?: string;
}>`
  display: ${(props) => props.display || "block"};
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  text-align: left;
  background-color: transparent;
  transition: background 0.2s ease;

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;
