import React from 'react'
import ReactEcharts from 'echarts-for-react'

import MostRequestFrame from './styled/MostRequestFrame'
import getHostNameEgressData
  from '../get-data/web-log/getHostNameEgressData'
import getHostNameIngressData
  from '../get-data/web-log/getHostNameIngressData'

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

const MostRequestHostName = props => {
  return (
    <MostRequestFrame>
      <ReactEcharts
        option={ getHostNameEgressData() }
        style={{
          height: '100%',
          width: calWidth(props.width)
        }}
      />
      <ReactEcharts
        option={ getHostNameIngressData() }
        style={{
          height: '100%',
          width: calWidth(props.width)
        }}
      />
    </MostRequestFrame>
  )
}

export default MostRequestHostName
