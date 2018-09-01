import React from 'react'
import styled from 'styled-components'
import ReactEcharts from 'echarts-for-react'

import InternationalGraphFrame from './styled/InternationalGraphFrame'
import getInternationalGraphData
  from '../get-data/internet-graph/getInternationalGraphData'

const StyledDiv = styled.div`
  height: 5000px;
`

const InternationalGraph = props => {
  return (
    <InternationalGraphFrame>
      <ReactEcharts
        option={ getInternationalGraphData() }
        style={ { height: '100%' } }
      />
    </InternationalGraphFrame>
  )
}

export default InternationalGraph
