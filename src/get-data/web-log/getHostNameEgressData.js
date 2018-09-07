import hostNameEgress from '../../data/web-log/hostname_egress_3.3'

const getHostNameEgressData = () => ({
  title: {
    left: 'center',
    text: 'Most Request Host Name for Egress'
  },
  series: {
    type: 'treemap',
    data: hostNameEgress.map(item => ({
      name: item[1],
      value: item[0]
    }))
  },
  // color: ['#31ABD4']
})

export default getHostNameEgressData
