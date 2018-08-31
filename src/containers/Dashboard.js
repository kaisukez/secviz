import React, { Component } from 'react'

import Frame from '../components/styled-components/Frame'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Data from '../components/Data'

import login_count from '../login_times_sorted_count'
import login_time from '../login_times_sorted_time'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  getOption = () => {
    return {
      xAxis: {
          type: 'category',
          data: login_time.data
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          type: 'bar',
          data: login_count.data
      }]
    }
  }

  render() {
    return (
      <Frame>
        <Navbar />
        <Sidebar />
        <Data getOption={ this.getOption() }/>
      </Frame>
    )
  }
}

export default Dashboard
