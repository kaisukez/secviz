import filetypeIngress from '../../data/web-log/filetype_ingress_3.6'

const getFiletypeIngressData = () => ({
  title: {
    left: 'center',
    text: 'Most Request File Type for Ingress'
  },
  tooltip: {},
  series: {
    type: 'treemap',
    data: filetypeIngress.map(item => ({
      name: item[1],
      value: item[0]
    }))
  },
  color: ['#95A5BE', '#7C4D7D', '#2E3748', '#6981BD', '#A0AEDB']
})

export default getFiletypeIngressData
