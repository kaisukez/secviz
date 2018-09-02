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
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: [
      { name: 'ipv4' , icon: 'circle'},
      { name: 'dual stack' , icon: 'circle'},
      { name: 'ipv6' , icon: 'circle'},
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
      name: 'ipv6',
      data: ipv6ValueList,
      stack: 'myStack',
      areaStyle: { normal: {} }
    },
    {
      type: 'line',
      name: 'dual stack',
      data: dualStackValueList,
      stack: 'myStack',
      areaStyle: { normal: {} }
    },
    {
      type: 'line',
      name: 'ipv4',
      data: ipv4ValueList,
      stack: 'myStack',
      areaStyle: { normal: {} }
    },
  ],
  color: ['red', 'lightgrey', 'darkblue']
})

export default getIpTypeData
