import React from 'react'
import styled from 'styled-components'
import ReactEcharts from 'echarts-for-react'

import DataFrame from './styled/DataFrame'
import getUserData from '../get-data/login-activity/getUserData'
import getLoginLogoutData from '../get-data/login-activity/getLoginLogoutData'
import getIpTypeData from '../get-data/login-activity/getIpTypeData'
import getIpRatioData from '../get-data/login-activity/getIpRatioData'
import getLoginActivityData
  from '../get-data/login-activity/getLoginActivityData'
import getServerDistributionData
  from '../get-data/login-activity/getServerDistributionData'

const ActiveUserFormat = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
`

const LoginLogoutFormat = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
`

const IpTypeFormat = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
`

const IpRatioFormat = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
`

const LoginActivityFormat = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 3;
`

const ServerDistributionFormat = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
`

const LoginActivity = props => {
  return (
    <DataFrame>
      <ActiveUserFormat>
        <ReactEcharts option={ getUserData() } />
      </ActiveUserFormat>
      <IpTypeFormat>
        <ReactEcharts option={ getIpTypeData() } />
      </IpTypeFormat>
      <LoginLogoutFormat>
        <ReactEcharts option={ getLoginLogoutData() } />
      </LoginLogoutFormat>
      <IpRatioFormat>
        <ReactEcharts option={ getIpRatioData() } />
      </IpRatioFormat>
      <LoginActivityFormat>
        <ReactEcharts option={ getLoginActivityData() } />
      </LoginActivityFormat>
      <ServerDistributionFormat>
        <ReactEcharts option={ getServerDistributionData() } />
      </ServerDistributionFormat>
    </DataFrame>
  )
}

export default LoginActivity
