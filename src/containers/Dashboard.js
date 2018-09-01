import React, { Component } from 'react'

import DashboardFrame from './styled/DashboardFrame'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import LoginActivity from '../components/LoginActivity'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'login-activity'
    }
  }

  renderPage = () => {
    switch (this.state.page) {
      case 'login-activity':
        return <LoginActivity />
      default:
        return <LoginActivity />
    }
  }

  render() {
    return (
      <DashboardFrame>
        <Navbar />
        <Sidebar />
        { this.renderPage() }
      </DashboardFrame>
    )
  }
}

export default Dashboard
