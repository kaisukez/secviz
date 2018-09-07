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

const calHeight = (windowWidth, windowHeight) => {
  if (!windowWidth || !windowHeight)
    return '100%'
  const adjustedHeight = windowHeight - dashboardVar.navbarHeightInt
  if (windowWidth <= screenSize.suspectedUserBreakPointInt)
    return adjustedHeight / 2
  else
    return adjustedHeight
}

const MostRequestFiletype = props => {
  return (
    <MostRequestFrame>
      <ReactEcharts
        option={ getFiletypeEgressData() }
        style={{
          height: calHeight(props.width, props.height),
          width: calWidth(props.width)
        }}
      />
      <ReactEcharts
        option={ getFiletypeIngressData() }
        style={{
          height: calHeight(props.width, props.height),
          width: calWidth(props.width)
        }}
      />
    </MostRequestFrame>
  )
}

export default MostRequestFiletype
