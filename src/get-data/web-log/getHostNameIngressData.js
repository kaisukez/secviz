import hostNameIngress from '../../data/web-log/hostname_ingress_3.4'

const getHostNameIngressData = () => ({
  title: {
    left: 'center',
    text: 'Most Request Host Name for Ingress'
  },
  tooltip: {},
  series: {
    type: 'treemap',
    data: hostNameIngress.map(item => ({
      name: item[1],
      value: item[0]
    }))
  },
  color: ['#95A5BE', '#7C4D7D', '#2E3748', '#6981BD', '#A0AEDB']
})

export default getHostNameIngressData
