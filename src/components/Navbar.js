import React from 'react'

import StyledNavbar from './styled/Navbar'
import Brand from './styled/Brand'
import Github from './styled/Github'

export default (props) => {
  return (
    <StyledNavbar>
      <Brand>secviz</Brand>
      <Github href='https://github.com/kaisukez/secviz'>visit github</Github>
    </StyledNavbar>
  )
}
