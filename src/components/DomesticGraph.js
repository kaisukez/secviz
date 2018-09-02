import React from 'react'
import ReactEcharts from 'echarts-for-react'

import GraphFrame from './styled/GraphFrame'
import getDomesticGraphData
  from '../get-data/internet-graph/getDomesticGraphData'

import dashboardVar from '../variables/dashboardVar'

const calWidth = windowWidth => {
  if (!windowWidth)
    return '100%'
  const adjustedWidth = windowWidth - dashboardVar.sidebarWidthInt
  return adjustedWidth
}

const DomesticGraph = props => {
  return (
    <GraphFrame>
      <ReactEcharts
        option={ getDomesticGraphData() }
        style={{
          height: '100%',
          width: calWidth(props.width)
        }}
      />
    </GraphFrame>
  )
}

export default DomesticGraph
