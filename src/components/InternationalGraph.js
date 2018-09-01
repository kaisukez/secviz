import React from 'react'
import ReactEcharts from 'echarts-for-react'

import GraphFrame from './styled/GraphFrame'
import getInternationalGraphData
  from '../get-data/internet-graph/getInternationalGraphData'

const InternationalGraph = props => {
  return (
    <GraphFrame>
      <ReactEcharts
        option={ getInternationalGraphData() }
        style={ { height: '100%' } }
      />
    </GraphFrame>
  )
}

export default InternationalGraph
