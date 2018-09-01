import React, { Component } from 'react'

import DashboardFrame from './styled/DashboardFrame'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import LoginActivity from '../components/LoginActivity'
import InternationalGraph from '../components/InternationalGraph'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'login-activity'
    }
  }

  changePage = page => {
    this.setState({ page })
  }

  renderPage = () => {
    switch (this.state.page) {
      case 'login-activity':
        return <LoginActivity />
      case 'international-graph':
        return <InternationalGraph />
      default:
        return <LoginActivity />
    }
  }

  render() {
    return (
      <DashboardFrame>
        <Navbar />
        <Sidebar changePage={ this.changePage } />
        { this.renderPage() }
      </DashboardFrame>
    )
  }
}

export default Dashboard
