import loginLogoutTimeSeries
  from '../../data/login-activity/login-logout-timeseries'

const dateList = loginLogoutTimeSeries.map(item => item[0])
const loginValueList = loginLogoutTimeSeries.map(item => item[1])
const logoutValueList = loginLogoutTimeSeries.map(item => item[2])

const getLoginLogoutData = () => ({
  title: {
    left: 'center',
    text: 'Login / Logout'
  },
  xAxis: {
    type: 'category',
    data: dateList
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'line',
      data: loginValueList,
      stack: 'myStack',
      areaStyle: { normal: {} }
    },
    {
      type: 'line',
      data: logoutValueList,
      stack: 'myStack',
      areaStyle: { normal: {} }
    }
  ]
})

export default getLoginLogoutData
