import React from 'react'
import ReactEcharts from 'echarts-for-react'

import MostRequestFrame from './styled/MostRequestFrame'
import getFiletypeEgressData
  from '../get-data/web-log/getFiletypeEgressData'
import getFiletypeIngressData
  from '../get-data/web-log/getFiletypeIngressData'

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

const MostRequestFiletype = props => {
  return (
    <MostRequestFrame>
      <ReactEcharts
        option={ getFiletypeEgressData() }
        style={{
          height: '100%',
          width: calWidth(props.width)
        }}
      />
      <ReactEcharts
        option={ getFiletypeIngressData() }
        style={{
          height: '100%',
          width: calWidth(props.width)
        }}
      />
    </MostRequestFrame>
  )
}

export default MostRequestFiletype
