import React from 'react'
import styled from 'styled-components'
import ReactEcharts from 'echarts-for-react'

import LoginActivityFrame from './styled/LoginActivityFrame'
import getUserData from '../get-data/login-activity/getUserData'
import getLoginLogoutData from '../get-data/login-activity/getLoginLogoutData'
import getIpTypeData from '../get-data/login-activity/getIpTypeData'
import getIpRatioData from '../get-data/login-activity/getIpRatioData'
import getLoginActivityData
  from '../get-data/login-activity/getLoginActivityData'
import getServerDistributionData
  from '../get-data/login-activity/getServerDistributionData'

import screenSize from '../variables/screenSize'
import dashboardVar from '../variables/dashboardVar'

const ActiveUserFormat = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: ${ screenSize.medium }) {
    grid-column-start: 1;
    grid-column-end: 7;
  }
  @media (max-width: ${ screenSize.medium }) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  @media (max-width: ${ screenSize.small }) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`

const IpTypeFormat = styled.div`
width: 100%;
height: 100%;
@media (min-width: ${ screenSize.medium }) {
  grid-column-start: 1;
  grid-column-end: 4;
}
@media (max-width: ${ screenSize.medium }) {
  grid-column-start: 1;
  grid-column-end: 3;
}
@media (max-width: ${ screenSize.small }) {
  grid-column-start: 1;
  grid-column-end: 2;
}
`

const LoginLogoutFormat = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: ${ screenSize.medium }) {
    grid-column-start: 4;
    grid-column-end: 7;
  }
  @media (max-width: ${ screenSize.medium }) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  @media (max-width: ${ screenSize.small }) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`

const IpRatioFormat = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: ${ screenSize.medium }) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  @media (max-width: ${ screenSize.medium }) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  @media (max-width: ${ screenSize.small }) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`

const LoginActivityFormat = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: ${ screenSize.medium }) {
    grid-column-start: 3;
    grid-column-end: 5;
  }
  @media (max-width: ${ screenSize.medium }) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
  @media (max-width: ${ screenSize.small }) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`

const ServerDistributionFormat = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: ${ screenSize.medium }) {
    grid-column-start: 5;
    grid-column-end: 7;
  }
  @media (max-width: ${ screenSize.medium }) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  @media (max-width: ${ screenSize.small }) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`

const calWidthActiveUser = windowWidth => {
  if (!windowWidth)
    return '100%'
  const adjustedWidth = windowWidth - dashboardVar.sidebarWidthInt
  return adjustedWidth
}

const calWidthIpTypeIpLoginLogout = windowWidth => {
  if (!windowWidth)
    return '100%'
  const adjustedWidth = windowWidth - dashboardVar.sidebarWidthInt
  // console.log(windowWidth, screenSize.mediumInt)
  if (windowWidth <= screenSize.mediumInt)
    return adjustedWidth
  else
    return adjustedWidth / 2
}

const calWidthIpRatioLoginActivity = windowWidth => {
  if (!windowWidth)
    return '100%'
  const adjustedWidth = windowWidth - dashboardVar.sidebarWidthInt
  if (windowWidth <= screenSize.smallInt)
    return adjustedWidth
  else if (windowWidth <= screenSize.mediumInt)
    return adjustedWidth / 2
  else
    return adjustedWidth / 3
}

const calWidthServerDistribution = windowWidth => {
  if (!windowWidth)
    return '100%'
  const adjustedWidth = windowWidth - dashboardVar.sidebarWidthInt
  if (windowWidth <= screenSize.smallInt)
    return adjustedWidth
  else if (windowWidth <= screenSize.mediumInt)
    return adjustedWidth
  else
    return adjustedWidth / 3
}

const LoginActivity = props => {
  return (
    <LoginActivityFrame>
      <ActiveUserFormat>
        <ReactEcharts
          option={ getUserData() }
          style={{
            height: '100%',
            width: calWidthActiveUser(props.width)
          }}
        />
      </ActiveUserFormat>
      <IpTypeFormat>
        <ReactEcharts
          option={ getIpTypeData() }
          style={{
            height: '100%',
            width: calWidthIpTypeIpLoginLogout(props.width)
          }}
        />
      </IpTypeFormat>
      <LoginLogoutFormat>
        <ReactEcharts
          option={ getLoginLogoutData() }
          style={{
            height: '100%',
            width: calWidthIpTypeIpLoginLogout(props.width)
          }}
        />
      </LoginLogoutFormat>
      <IpRatioFormat>
        <ReactEcharts
          option={ getIpRatioData() }
          style={{
            height: '100%',
            width: calWidthIpRatioLoginActivity(props.width)
          }}
        />
      </IpRatioFormat>
      <LoginActivityFormat>
        <ReactEcharts
          option={ getLoginActivityData() }
          style={{
            height: '100%',
            width: calWidthIpRatioLoginActivity(props.width)
          }}
        />
      </LoginActivityFormat>
      <ServerDistributionFormat>
        <ReactEcharts
          option={ getServerDistributionData() }
          style={{
            height: '100%',
            width: calWidthServerDistribution(props.width)
          }}
        />
      </ServerDistributionFormat>
    </LoginActivityFrame>
  )
}

export default LoginActivity
