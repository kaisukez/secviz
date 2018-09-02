import InternationalExchage
  from '../../data/internet-graph/International_Exchange'

var category_from_isp_type = {
  'ISP-Inter': 0,
  'ISP-Local': 1,
  'ISP-Govt': 2,
  'IIG': 3
}
var categories_list = [
  { name: 'ISP-Inter', itemStyle: { color: '#0E91C9'} },
  { name: 'ISP-Local', itemStyle: { color: '#60D1AA'} },
  { name: 'ISP-Govt', itemStyle: { color: '#ED4747'} },
  { name: 'IIG', itemStyle: { color: '#DEDB7A'} },
]

const getInternationalGraphData = graphType => ({
  title: {
      text: 'International Internet Graph',
      left: 'center'
  },
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  legend: {
    top: 30,
    data: categories_list
  },
  series : [
      {
          type: 'graph',
          layout: graphType,
          // layout: 'circular',
          draggable: true,
          // progressiveThreshold: 700,
          categories: categories_list,
          data: InternationalExchage.nodes.map(function (node) {
              return {
                  x: node.x,
                  y: node.y,
                  id: node.id,
                  // name: node.label,
                  name: node.name,
                  category: category_from_isp_type[node.ispType],
                  symbolSize: node.size,
                  itemStyle: {
                      normal: {
                          color: node.colorByType
                          // color: node.color
                      }
                  }
              };
          }),
          edges: InternationalExchage.edges.map(function (edge) {
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
          force: {
            repulsion: 500
          }
      }
  ]
})

export default getInternationalGraphData
