import ipTypeTimeSeries from '../../data/login-activity/ip-type-timeseries'

const dateList = ipTypeTimeSeries.map(item => item[0])
const ipv4ValueList = ipTypeTimeSeries.map(item => item[1])
const ipv6ValueList = ipTypeTimeSeries.map(item => item[2])
const dualStackValueList = ipTypeTimeSeries.map(item => item[3])

const getIpTypeData = () => ({
  title: {
    left: 'center',
    text: 'IP Type'
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
      data: ipv4ValueList,
      stack: 'myStack',
      areaStyle: { normal: {} }
    },
    {
      type: 'line',
      data: ipv6ValueList,
      stack: 'myStack',
      areaStyle: { normal: {} }
    },
    {
      type: 'line',
      data: dualStackValueList,
      stack: 'myStack',
      areaStyle: { normal: {} }
    },
  ]
})

export default getIpTypeData
