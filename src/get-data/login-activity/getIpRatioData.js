import ipRatio from '../../data/login-activity/ip-ratio'

const ipv4Value = ipRatio.ipv4
const ipv6Value = ipRatio.ipv6
const dualStackValue = ipRatio.dualStack

const getIpRatioData = () => ({
  title: {
    left: 'center',
    text: 'IP Ratio'
  },
  tooltip: {},
  series: {
    type: 'pie',
    radius: [50, 110],
    // roseType: 'radius',
    data: [
      { name: 'ipv4', value: ipv4Value },
      { name: 'dual stack', value: dualStackValue },
      { name: 'ipv6', value: ipv6Value },
    ]
  },
  color: ['#3C86C8', '#C2F238', '#FF593B']
})

export default getIpRatioData
