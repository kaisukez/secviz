import React, { Component } from 'react'

import DashboardFrame from './styled/DashboardFrame'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import LoginActivity from '../components/LoginActivity'
import InternationalGraph from '../components/InternationalGraph'
import DomesticGraph from '../components/DomesticGraph'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'domestic-graph'
    }
  }

  changePage = page => {
    this.setState({ page })
  }

  renderPage = () => {
    switch (this.state.page) {
      case 'domestic-graph':
        return <DomesticGraph />
      case 'international-graph':
        return <InternationalGraph />
      case 'login-activity':
        return <LoginActivity />
      default:
        return <DomesticGraph />
    }
  }

  render() {
    return (
      <DashboardFrame>
        <Navbar />
        <Sidebar
          page={ this.state.page }
          changePage={ this.changePage }
        />
        { this.renderPage() }
      </DashboardFrame>
    )
  }
}

export default Dashboard
