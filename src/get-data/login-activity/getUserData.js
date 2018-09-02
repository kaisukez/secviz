import userTimeSeries from '../../data/login-activity/user-timeseries'

const dateList = userTimeSeries.map(item => item[0])
const valueList = userTimeSeries.map(item => item[1])

const getUserData = () => ({
  title: {
    left: 'center',
    text: 'Active Users'
  },
  tooltip: {
    trigger: 'axis'
  },
  visualMap: {
    show: false,
    type: 'continuous',
    seriesIndex: 0,
    min: 0,
    max: 200,
    inRange: {
        color: ['lightgrey', '#2E64B0', '#222222']
    }
  },
  xAxis: {
    type: 'category',
    data: dateList
  },
  yAxis: {
    type: 'value'
  },
  series: {
    type: 'line',
    data: valueList,
  },
  // color: ['#31ABD4']
})

export default getUserData
