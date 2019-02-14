import React from 'react'
import styled from 'styled-components'

import StyledSidebar from './styled/Sidebar'

import dashboardVar from '../variables/dashboardVar'

const Navigator = styled.div`
  background-color: ${ props => props.active ? '#F7FCFF' : '#D6F0FF' };
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  cursor: pointer;
  border-bottom: 2px solid #F7FCFF;
  ${'' /* transition: all 10s;
  --webkit-transition: all 10s; */}
`

const SubNavigator = styled.div`
  background-color: ${ props => props.active ? '#F7FCFF' : '#D6F0FF' };
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  cursor: pointer;
  border-bottom: 2px solid #F7FCFF;
  border-left: 20px solid #F7FCFF;
`

const SubNavigatorWrapper = styled.div`
  height: ${ props => props.display === 'block' ? 90 : 0 };
  ${'' /* opacity: ${ props => props.display === 'block' ? 9 : 0 }; */}
  position: relative;
  left: ${ props => props.display === 'block' ? '0px' : `-${dashboardVar.sidebarWidthInt}px` };
  ${'' /* transition: left 1s;
  --webkit-transition: left 1s; */}
`

const isActive = (page, matchingString) => {
  if (page === matchingString)
    return true
  else
    return false
}

const display = (page, matchingString) => {
  if (page === matchingString)
    return 'block'
  else
    return 'none'
}

export default (props) => {
  return (
    <StyledSidebar>
      <Navigator
        onClick={ () => props.changePage('domestic-graph') }
        active={ isActive(props.page, 'domestic-graph') }
      >
        Domestic Internet Map
      </Navigator>
      <SubNavigatorWrapper display={ display(props.page, 'domestic-graph') }>
        <SubNavigator
          active={ isActive(props.domesticGraphType, 'none') }
          onClick={ () => props.changeDomesticGraphType('none') }
        >
          random position
        </SubNavigator>
        <SubNavigator
          active={ isActive(props.domesticGraphType, 'circular') }
          onClick={ () => props.changeDomesticGraphType('circular') }
        >
          circular
        </SubNavigator>
        <SubNavigator
          active={ isActive(props.domesticGraphType, 'force') }
          onClick={ () => props.changeDomesticGraphType('force') }
        >
          force
        </SubNavigator>
      </SubNavigatorWrapper>

      <Navigator
        onClick={ () => props.changePage('international-graph') }
        active={ isActive(props.page, 'international-graph') }
      >
        International Internet Map
      </Navigator>
      <SubNavigatorWrapper display={ display(props.page, 'international-graph') }>
        <SubNavigator
          active={ isActive(props.internationalGraphType, 'none') }
          onClick={ () => props.changeInternationalGraphType('none') }
        >
          random position
        </SubNavigator>
        <SubNavigator
          active={ isActive(props.internationalGraphType, 'circular') }
          onClick={ () => props.changeInternationalGraphType('circular') }
        >
          circular
        </SubNavigator>
        <SubNavigator
          active={ isActive(props.internationalGraphType, 'force') }
          onClick={ () => props.changeInternationalGraphType('force') }
        >
          force
        </SubNavigator>
      </SubNavigatorWrapper>

      <Navigator
        onClick={ () => props.changePage('login-activity') }
        active={ isActive(props.page, 'login-activity') }
      >
        Login Log
      </Navigator>

      {/* <Navigator
        onClick={ () => props.changePage('web-log') }
        active={ isActive(props.page, 'web-log') }
      >
        Web Log
      </Navigator>
      <SubNavigatorWrapper display={ display(props.page, 'web-log') }>
        <SubNavigator
          active={ isActive(props.webLogSector, 'suspected-user') }
          onClick={ () => props.changeWebLogSector('suspected-user') }
        >
          suspected user
        </SubNavigator>
        <SubNavigator
          active={ isActive(props.webLogSector, 'timeline-connectivity') }
          onClick={ () => props.changeWebLogSector('timeline-connectivity') }
        >
          timeline connectivity
        </SubNavigator>
        <SubNavigator
          active={ isActive(props.webLogSector, 'most-request-host-name') }
          onClick={ () => props.changeWebLogSector('most-request-host-name') }
        >
          most request host name
        </SubNavigator>
        <SubNavigator
          active={ isActive(props.webLogSector, 'most-request-file-type') }
          onClick={ () => props.changeWebLogSector('most-request-file-type') }
        >
          most request file type
        </SubNavigator>
      </SubNavigatorWrapper> */}

    </StyledSidebar>
  )
}
