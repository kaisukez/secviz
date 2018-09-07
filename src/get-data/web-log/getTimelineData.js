import timeline from '../../data/web-log/timeline_3.2'

const getTimelineData = () => ({
  title: {
    left: 'center',
    text: 'Timeline Connectivity'
  },
  series: {
    type: 'parallel',
    data: timeline
  },
  // color: ['#31ABD4']
  parallelAxis: [
    { dim: 0, name: 'Time' },
    { dim: 1, name: 'Username' },
    { dim: 2, name: 'IP Source' },
    { dim: 3, name: 'IP Destination' },
    { dim: 4, name: 'Port Destination' },
    { dim: 5, name: 'Hostname' },
  ]
})

export default getTimelineData
