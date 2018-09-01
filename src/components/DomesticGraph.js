import React from 'react'
import ReactEcharts from 'echarts-for-react'

import GraphFrame from './styled/GraphFrame'
import getDomesticGraphData
  from '../get-data/internet-graph/getDomesticGraphData'

const DomesticGraph = props => {
  return (
    <GraphFrame>
      <ReactEcharts
        option={ getDomesticGraphData() }
        style={ { height: '100%' } }
      />
    </GraphFrame>
  )
}

export default DomesticGraph
