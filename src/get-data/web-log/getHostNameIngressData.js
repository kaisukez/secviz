import hostNameIngress from '../../data/web-log/hostname_ingress_3.4'

const getHostNameIngressData = () => ({
  title: {
    left: 'center',
    text: 'Most Request Host Name for Ingress'
  },
  series: {
    type: 'treemap',
    data: hostNameIngress.map(item => ({
      name: item[1],
      value: item[0]
    }))
  },
  // color: ['#31ABD4']
})

export default getHostNameIngressData
