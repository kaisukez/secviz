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
      page: 'domestic-graph',
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  updateWidth = () => {
    const width = window.innerWidth
    // console.log('width:', width)
    this.setState({ width })
    // this.setState({ width: $(window).width(), height: $(window).height() })
  }

  changePage = page => {
    this.setState({ page })
  }

  renderPage = width => {
    switch (this.state.page) {
      case 'domestic-graph':
        return <DomesticGraph width={ width } />
      case 'international-graph':
        return <InternationalGraph width={ width } />
      case 'login-activity':
        return <LoginActivity width={ width } />
      default:
        return <DomesticGraph width={ width } />
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
        { this.renderPage(this.state.width) }
      </DashboardFrame>
    )
  }
}

export default Dashboard
