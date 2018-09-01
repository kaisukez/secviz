import DomesticExchage
  from '../../data/internet-graph/Domestic_Exchange'

var category_from_isp_type = {
  'NIX': 0,
  'ISP-Local': 1,
  'ISP-Govt': 2,
  'IIG': 3,
  // 'Gov.': 4
}

var categories_list = [
  { name: 'NIX', itemStyle: { color: '#D775F0'} },
  { name: 'ISP-Local', itemStyle: { color: '#60D1AA'} },
  { name: 'ISP-Govt', itemStyle: { color: '#ED4747'} },
  { name: 'IIG', itemStyle: { color: '#DEDB7A'} },
  // { name: 'Gov.', itemStyle: { color: '#E6F075'} },
]

const getDomesticGraphData = () => ({
  title: {
      text: 'Domestic Internet Graph',
      // text: 'Domestic Graph'
  },
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  legend: {
    data: categories_list
  },
  series : [
      {
          type: 'graph',
          layout: 'none',
          draggable: true,
          // progressiveThreshold: 700,
          categories: categories_list,
          data: DomesticExchage.nodes.map(function (node) {
            console.log(node.colorByType)
              return {
                  x: node.x,
                  y: node.y,
                  id: node.id,
                  // name: node.label,
                  name: node.name,
                  category: category_from_isp_type[node.ispType],
                  symbolSize: Number(node.size) * 3,
                  itemStyle: {
                      normal: {
                          color: node.colorByType
                          // color: node.color
                      }
                  }
              };
          }),
          edges: DomesticExchage.edges.map(function (edge) {
              return {
                  source: edge.sourceID,
                  target: edge.targetID,
                  lineStyle: {
                    width: Number(Math.pow(edge.size, 1/2.5)) < 1 ?
                      1 : Number(Math.pow(edge.size, 1/2.5))
                  }
              };
          }),
          label: {
              emphasis: {
                  position: 'right',
                  show: true
              }
          },
          roam: true,
          focusNodeAdjacency: true,
          lineStyle: {
              normal: {
                  width: 0.4,
                  curveness: 0.07,
                  opacity: 0.24
              }
          },
      }
  ]
})

export default getDomesticGraphData
