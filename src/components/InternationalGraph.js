import React from 'react'
import ReactEcharts from 'echarts-for-react'

import GraphFrame from './styled/GraphFrame'
import getInternationalGraphData
  from '../get-data/internet-graph/getInternationalGraphData'

import dashboardVar from '../variables/dashboardVar'

const InternationalGraph = props => {
  return (
    <GraphFrame>
      <ReactEcharts
        option={ getInternationalGraphData() }
        style={{
          height: '100%',
          width: props.width - dashboardVar.sidebarWidthInt
        }}
      />
    </GraphFrame>
  )
}

export default InternationalGraph
