import React from 'react'
import styled from 'styled-components'

import StyledSidebar from './styled/Sidebar'

const Navigator = styled.div`
  background-color: ${ props => props.active ? '#F7FCFF' : '#D6F0FF'}
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  cursor: pointer;
  ${'' /* font-family: Arial; */}
  border-bottom: 2px solid lightgrey;
`

const isActive = (page, matchingString) => {
  if (page === matchingString)
    return true
  else
    return false
}

export default (props) => {
  return (
    <StyledSidebar>
      <Navigator
        onClick={ () => props.changePage('domestic-graph') }
        active={ isActive(props.page, 'domestic-graph')}
      >
        Domestic Internet Graph
      </Navigator>
      <Navigator
        onClick={ () => props.changePage('international-graph') }
        active={ isActive(props.page, 'international-graph')}
      >
        International Internet Graph
      </Navigator>
      <Navigator
        onClick={ () => props.changePage('login-activity') }
        active={ isActive(props.page, 'login-activity')}
      >
        Login Activity
      </Navigator>
    </StyledSidebar>
  )
}
