import React from 'react'

import StyledSidebar from './styled/Sidebar'

export default (props) => {
  return (
    <StyledSidebar>
      <div onClick={ () => props.changePage('domestic-graph') }>
        Domestic Internet Graph
      </div>
      <div onClick={ () => props.changePage('international-graph') }>
        International Internet Graph
      </div>
      <div onClick={ () => props.changePage('login-activity') }>
        Login Activity
      </div>
    </StyledSidebar>
  )
}
