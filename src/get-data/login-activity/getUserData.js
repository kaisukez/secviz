import userTimeSeries from '../../data/login-activity/user-timeseries'

const dateList = userTimeSeries.map(item => item[0])
const valueList = userTimeSeries.map(item => item[1])

const getUserData = () => ({
  title: {
    left: 'center',
    text: 'Active Users'
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
    data: valueList
  }
})

export default getUserData
