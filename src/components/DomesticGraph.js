import React from 'react'
import ReactEcharts from 'echarts-for-react'

import GraphFrame from './styled/GraphFrame'
import getDomesticGraphData
  from '../get-data/internet-graph/getDomesticGraphData'

import dashboardVar from '../variables/dashboardVar'

const DomesticGraph = props => {
  return (
    <GraphFrame>
      <ReactEcharts
        option={ getDomesticGraphData() }
        style={{
          height: '100%',
          width: props.width - dashboardVar.sidebarWidthInt
        }}
      />
    </GraphFrame>
  )
}

export default DomesticGraph
