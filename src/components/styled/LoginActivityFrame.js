import styled from 'styled-components'
import screenSize from '../../variables/screenSize'

const LoginActivityFrame = styled.div`
  background-color: #FEFEFE;
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 3;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 300px);
  @media (max-width: ${ screenSize.medium }) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 300px);
  }
  @media (max-width: ${ screenSize.small }) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 300px);
  }
`

export default LoginActivityFrame
