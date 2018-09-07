import React from 'react'
import ReactEcharts from 'echarts-for-react'

import TimelineConnectivityFrame from './styled/TimelineConnectivityFrame'
import getTimelineData from '../get-data/web-log/getTimelineData'

import dashboardVar from '../variables/dashboardVar'

const calWidth = windowWidth => {
  if (!windowWidth)
    return '100%'
  const adjustedWidth = windowWidth - dashboardVar.sidebarWidthInt
  return adjustedWidth
}

const TimelineConnectivity = props => {
  return (
    <TimelineConnectivityFrame>
      <ReactEcharts
        option={ getTimelineData() }
        style={{
          height: '100%',
          width: calWidth(props.width)
        }}
      />
    </TimelineConnectivityFrame>
  )
}

export default TimelineConnectivity
