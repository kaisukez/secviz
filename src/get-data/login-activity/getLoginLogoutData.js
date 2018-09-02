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
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: [
      { name: 'login' , icon: 'circle'},
      { name: 'logout' , icon: 'circle'},
    ],
    top: 30
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
      name: 'logout',
      data: logoutValueList,
      stack: 'myStack',
      areaStyle: { normal: {} }
    },
    {
      type: 'line',
      name: 'login',
      data: loginValueList,
      stack: 'myStack',
      areaStyle: { normal: {} }
    },
  ],
  color: ['#40DCED', '#252B2B']
})

export default getLoginLogoutData
