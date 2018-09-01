import ipRatio from '../../data/login-activity/ip-ratio'

const ipv4Value = ipRatio.ipv4
const ipv6Value = ipRatio.ipv6
const dualStackValue = ipRatio.dualStack

const getIpRatioData = () => ({
  title: {
    left: 'center',
    text: 'IP Ratio'
  },
  series: {
    type: 'pie',
    radius: [30, 110],
    roseType: 'radius',
    data: [
      { name: 'ipv4', value: ipv4Value },
      { name: 'ipv6', value: ipv6Value },
      { name: 'dual stack', value: dualStackValue },
    ]
  }
})

export default getIpRatioData
