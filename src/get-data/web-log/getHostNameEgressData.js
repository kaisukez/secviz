import hostNameEgress from '../../data/web-log/hostname_egress_3.3'

const getHostNameEgressData = () => ({
  title: {
    left: 'center',
    text: 'Most Request Host Name for Egress'
  },
  tooltip: {},
  series: {
    type: 'treemap',
    data: hostNameEgress.map(item => ({
      name: item[1],
      value: item[0]
    }))
  },
  color: ['#142845', '#20767D', '#98BE94', '#D6D285', '#B18D5D']
})

export default getHostNameEgressData
