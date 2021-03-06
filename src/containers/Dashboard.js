import React, { Component } from 'react'

import DashboardFrame from './styled/DashboardFrame'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import LoginActivity from '../components/LoginActivity'
import InternationalGraph from '../components/InternationalGraph'
import DomesticGraph from '../components/DomesticGraph'
// import SuspectedUser from '../components/SuspectedUser'
// import TimelineConnectivity from '../components/TimelineConnectivity'
// import MostRequestHostName from '../components/MostRequestHostName'
// import MostRequestFiletype from '../components/MostRequestFiletype'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'domestic-graph',
      domesticGraphType: 'none',
      internationalGraphType: 'circular',
      webLogSector: 'suspected-user'
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
    const height = window.innerHeight
    this.setState({ width, height })
  }

  changePage = page => {
    this.setState({
      page,
      domesticGraphType: 'none',
      internationalGraphType: 'circular'
    })
  }

  changeDomesticGraphType = graphType => {
    this.setState({ domesticGraphType: graphType })
  }

  changeInternationalGraphType = graphType => {
    this.setState({ internationalGraphType: graphType })
  }

  changeWebLogSector = sector => {
    this.setState({ webLogSector: sector })
  }

  renderPage = (width, height) => {
    switch (this.state.page) {
      case 'domestic-graph':
        return (
          <DomesticGraph
            width={ width }
            graphType={ this.state.domesticGraphType }
          />
        )
      case 'international-graph':
        return (
          <InternationalGraph
            width={ width }
            graphType={ this.state.internationalGraphType }
          />
        )
      case 'login-activity':
        return <LoginActivity width={ width } />
      // case 'web-log':
      //   switch (this.state.webLogSector) {
      //     case 'suspected-user':
      //       return <SuspectedUser width={ width }/>
      //     case 'timeline-connectivity':
      //       return <TimelineConnectivity width={ width } />
      //     case 'most-request-host-name':
      //       return <MostRequestHostName width={ width } height={ height }/>
      //     case 'most-request-file-type':
      //       return <MostRequestFiletype width={ width } height={ height } />
      //     default:
      //       return <SuspectedUser width={ width } />
      //   }
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
          domesticGraphType={ this.state.domesticGraphType }
          internationalGraphType={ this.state.internationalGraphType }
          changeDomesticGraphType={ this.changeDomesticGraphType }
          changeInternationalGraphType={ this.changeInternationalGraphType }
          webLogSector={ this.state.webLogSector }
          changeWebLogSector={ this.changeWebLogSector }
        />
        { this.renderPage(this.state.width, this.state.height) }
      </DashboardFrame>
    )
  }
}

export default Dashboard
