import filetypeIngress from '../../data/web-log/filetype_ingress_3.6'

const getFiletypeIngressData = () => ({
  title: {
    left: 'center',
    text: 'Most Request File Type for Ingress'
  },
  series: {
    type: 'treemap',
    data: filetypeIngress.map(item => ({
      name: item[1],
      value: item[0]
    }))
  },
  // color: ['#31ABD4']
})

export default getFiletypeIngressData
