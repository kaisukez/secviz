import styled from 'styled-components'
import dashboardVar from '../../variables/dashboardVar'

const DashboardFrame = styled.div`
  display: grid;
  grid-template-columns: ${ dashboardVar.sidebarWidth } auto;
  grid-template-rows: ${ dashboardVar.navbarHeight } auto;
  height: 100vh;
`

export default DashboardFrame
