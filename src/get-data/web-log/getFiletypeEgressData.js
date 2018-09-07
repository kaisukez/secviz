import filetypeEgress from '../../data/web-log/filetype_egress_3.5'

const getFiletypeEgressData = () => ({
  title: {
    left: 'center',
    text: 'Most Request File Type for Egress'
  },
  tooltip: {},
  series: {
    type: 'treemap',
    data: filetypeEgress.map(item => ({
      name: item[1],
      value: item[0]
    }))
  },
  color: ['#142845', '#20767D', '#98BE94', '#D6D285', '#B18D5D']
})

export default getFiletypeEgressData
