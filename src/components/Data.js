import React from 'react'
import ReactEcharts from 'echarts-for-react'

import StyledData from './styled-components/Data'

export default (props) => {
  return (
    <StyledData>
      <ReactEcharts option={ props.getOption }/>
    </StyledData>
  )
}
