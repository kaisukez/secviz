import styled from 'styled-components'

import dashboardVar from '../../variables/dashboardVar'

const Navbar = styled.div`
  background-color: #23B5D3;
  width: 100%;
  ${'' /* height: 100%; */}
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  position: fixed;
  height: ${ dashboardVar.navbarHeight };
  z-index: 1;
`

export default Navbar
