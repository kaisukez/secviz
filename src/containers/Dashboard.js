import React, { Component } from 'react'

import Frame from '../components/styled-components/Frame'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Data from '../components/Data'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Frame>
        <Navbar />
        <Sidebar />
        <Data />
      </Frame>
    )
  }
}

export default Dashboard
