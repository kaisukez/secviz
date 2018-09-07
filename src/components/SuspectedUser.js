import React from 'react'
import ReactEcharts from 'echarts-for-react'

import SuspectedUserFrame from './styled/SuspectedUserFrame'
import getRequestPerMinuteData
  from '../get-data/web-log/getRequestPerMinuteData'
import getSuspectedUserData
  from '../get-data/web-log/getSuspectedUserData'

import screenSize from '../variables/screenSize'
import dashboardVar from '../variables/dashboardVar'

const calWidth = windowWidth => {
  if (!windowWidth)
    return '100%'
  const adjustedWidth = windowWidth - dashboardVar.sidebarWidthInt
  if (windowWidth <= screenSize.suspectedUserBreakPointInt)
    return adjustedWidth
  else
    return adjustedWidth / 2
}

const SuspectedUser = props => {
  return (
    <SuspectedUserFrame>
      <ReactEcharts
        option={ getRequestPerMinuteData() }
        style={{
          height: '100%',
          width: calWidth(props.width)
        }}
      />
      <ReactEcharts
        option={ getSuspectedUserData() }
        style={{
          height: '100%',
          width: calWidth(props.width)
        }}
      />
    </SuspectedUserFrame>
  )
}

export default SuspectedUser
