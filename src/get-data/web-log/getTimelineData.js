import timeline from '../../data/web-log/timeline_3.2'

const uniqUsername = [ ...new Set(timeline.map(item => item[1])) ]
const uniqIpSource = [ ...new Set(timeline.map(item => item[2])) ]
const uniqIpDestination = [ ...new Set(timeline.map(item => item[3])) ]
const uniqPorts = [ ...new Set(timeline.map(item => item[4])) ]
const uniqHostname = [ ...new Set(timeline.map(item => item[5])) ]

const stringPortTimeline = timeline.map(item => {
  return [item[0], item[1], item[2], item[3], String(item[4]), item[5]]
})
console.log(stringPortTimeline)

const getTimelineData = () => ({
  title: {
    left: 'center',
    text: 'Timeline Connectivity at 3:00AM'
  },
  // color: ['#31ABD4']
  parallelAxis: [
    { dim: 0, name: 'Time (micro second)' },
    { dim: 1, name: 'Username', type: 'category', data: uniqUsername },
    { dim: 2, name: 'IP Source', type: 'category', data: uniqIpSource },
    { dim: 3, name: 'IP Destination', type: 'category', data: uniqIpDestination },
    { dim: 4, name: 'Port Destination', type: 'category', data: uniqPorts.sort((a,b) => a - b) },
    { dim: 5, name: 'Hostname', type: 'category', data: uniqHostname },
  ],
  parallel: {
    right: 250
  },
  series: {
    type: 'parallel',
    data: stringPortTimeline
  },
})

export default getTimelineData
