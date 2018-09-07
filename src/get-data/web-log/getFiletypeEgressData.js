import filetypeEgress from '../../data/web-log/filetype_egress_3.5'

const getFiletypeEgressData = () => ({
  title: {
    left: 'center',
    text: 'Most Request File Type for Egress'
  },
  series: {
    type: 'treemap',
    data: filetypeEgress.map(item => ({
      name: item[1],
      value: item[0]
    }))
  },
  // color: ['#31ABD4']
})

export default getFiletypeEgressData
