import styled from 'styled-components'

import dashboardVar from '../../variables/dashboardVar'

const Sidebar = styled.div`
  background-color: #D6F0FF;
  ${'' /* width: 100%; */}
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;

  position: fixed;
  width: ${ dashboardVar.sidebarWidth };
  top: ${ dashboardVar.navbarHeight };
`

export default Sidebar
