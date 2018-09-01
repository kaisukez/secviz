import styled from 'styled-components'

const Data = styled.div`
  background-color: #FEFEFE;
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 3;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
`

export default Data
