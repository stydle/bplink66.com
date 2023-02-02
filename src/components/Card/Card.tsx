import styled from 'styled-components'

const Card = styled.div`
  overflow: hidden;
  border-radius: var(--borderRadius-md);
  overflow-wrap: break-word;
  box-shadow: var(--colors-card-shadow);
  transition: box-shadow 0.2s ease;
  background-color: var(--colors-card-bg);

  &:hover {
    box-shadow: var(--colors-card-active);
  }
`
export default Card
