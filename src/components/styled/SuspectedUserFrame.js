import styled from 'styled-components'
import screenSize from '../../variables/screenSize'

const SuspectedUserFrame = styled.div`
  background-color: #FEFEFE;
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  @media (max-width: ${ screenSize.suspectedUserBreakPoint }) {
    grid-template-columns: 1fr;
    grid-template-rows: 300px auto;
  }
`

export default SuspectedUserFrame
