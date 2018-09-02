import React from 'react'
import ReactEcharts from 'echarts-for-react'

import GraphFrame from './styled/GraphFrame'
import getInternationalGraphData
  from '../get-data/internet-graph/getInternationalGraphData'

import dashboardVar from '../variables/dashboardVar'

const calWidth = windowWidth => {
  if (!windowWidth)
    return '100%'
  const adjustedWidth = windowWidth - dashboardVar.sidebarWidthInt
  return adjustedWidth
}

const InternationalGraph = props => {
  return (
    <GraphFrame>
      <ReactEcharts
        option={ getInternationalGraphData() }
        style={{
          height: '100%',
          width: calWidth(props.width)
        }}
      />
    </GraphFrame>
  )
}

export default InternationalGraph
