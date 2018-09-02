import React from 'react'
import styled from 'styled-components'

import StyledSidebar from './styled/Sidebar'

const Navigator = styled.div`
  background-color: ${ props => props.active ? '#F7FCFF' : '#D6F0FF'};
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  cursor: pointer;
  border-bottom: 2px solid #F7FCFF;
`

const SubNavigator = styled.div`
  background-color: ${ props => props.active ? '#F7FCFF' : '#D6F0FF'};
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  cursor: pointer;
  border-bottom: 2px solid #F7FCFF;
  border-left: 20px solid #F7FCFF;
  display: ${ props => props.display };
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
        Domestic Internet Graph
      </Navigator>
      <SubNavigator
        display={ display(props.page, 'domestic-graph') }
        active={ isActive(props.domesticGraphType, 'none') }
        onClick={ () => props.changeDomesticGraphType('none') }
      >
        random position
      </SubNavigator>
      <SubNavigator
        display={ display(props.page, 'domestic-graph') }
        active={ isActive(props.domesticGraphType, 'circular') }
        onClick={ () => props.changeDomesticGraphType('circular') }
      >
        circular
      </SubNavigator>
      <SubNavigator
        display={ display(props.page, 'domestic-graph') }
        active={ isActive(props.domesticGraphType, 'force') }
        onClick={ () => props.changeDomesticGraphType('force') }
      >
        force
      </SubNavigator>

      <Navigator
        onClick={ () => props.changePage('international-graph') }
        active={ isActive(props.page, 'international-graph') }
      >
        International Internet Graph
      </Navigator>
      <SubNavigator
        display={ display(props.page, 'international-graph') }
        active={ isActive(props.internationalGraphType, 'none') }
        onClick={ () => props.changeInternationalGraphType('none') }
      >
        random position
      </SubNavigator>
      <SubNavigator
        display={ display(props.page, 'international-graph') }
        active={ isActive(props.internationalGraphType, 'circular') }
        onClick={ () => props.changeInternationalGraphType('circular') }
      >
        circular
      </SubNavigator>
      <SubNavigator
        display={ display(props.page, 'international-graph') }
        active={ isActive(props.internationalGraphType, 'force') }
        onClick={ () => props.changeInternationalGraphType('force') }
      >
        force
      </SubNavigator>

      <Navigator
        onClick={ () => props.changePage('login-activity') }
        active={ isActive(props.page, 'login-activity') }
      >
        Login Activity
      </Navigator>
    </StyledSidebar>
  )
}
