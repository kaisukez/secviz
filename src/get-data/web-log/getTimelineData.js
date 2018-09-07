import timeline from '../../data/web-log/timeline_3.2'

const user_count = {}
const ip_source_count = {}
const ip_destination_count = {}
const hostname_count = {}
timeline.forEach(item => {
  const user = item[1]
  const ip_source = item[2]
  const ip_destination = item[3]
  const hostname = item[5]
  if (!user_count[user])
    user_count[user] = 1
  else
    user_count[user]++

  if (!ip_source_count[ip_source])
    ip_source_count[ip_source] = 1
  else
    ip_source_count[ip_source]++

  if (!ip_destination_count[ip_destination])
    ip_destination_count[ip_destination] = 1
  else
    ip_destination_count[ip_destination]++

  if (!hostname_count[hostname])
    hostname_count[hostname] = 1
  else
    hostname_count[hostname]++
})

const user_count_array = []
const ip_source_count_array = []
const ip_destination_count_array = []
const hostname_count_array = []
for (let user in user_count) {
  user_count_array.push([user, user_count[user]])
}
for (let ip_source in ip_source_count) {
  ip_source_count_array.push([ip_source, ip_source_count[ip_source]])
}
for (let ip_destination in ip_destination_count) {
  ip_destination_count_array.push([ip_destination, ip_destination_count[ip_destination]])
}
for (let hostname in hostname_count) {
  hostname_count_array.push([hostname, hostname_count[hostname]])
}

const sorted_user_count_array = user_count_array.sort((a,b) => b[1] - a[1])
const sorted_ip_source_count_array = ip_source_count_array.sort((a,b) => b[1] - a[1])
const sorted_ip_destination_count_array = ip_destination_count_array.sort((a,b) => b[1] - a[1])
const sorted_hostname_count_array = hostname_count_array.sort((a,b) => b[1] - a[1])

const top = 15
const uniqUsername = sorted_user_count_array.map(item => item[0]).slice(0, top)
const uniqIpSource = sorted_ip_source_count_array.map(item => item[0])
const uniqIpDestination= sorted_ip_destination_count_array.map(item => item[0])
const uniqHostname = sorted_hostname_count_array.map(item => item[0])

console.log(uniqUsername)
const arrayToObject = array => {
  const object = {}
  array.forEach(item => {
    object[item] = true
  })
  return object
}
const username_dictionary = arrayToObject(uniqUsername)
const ip_source_dictionary = arrayToObject(uniqIpSource)
const ip_destination_dictionary = arrayToObject(uniqIpDestination)
const hostname_dictionary = arrayToObject(uniqHostname)

const newTimeline = timeline.map(item => {
  const time = item[0]
  const username = item[1]
  const ipSource = item[2]
  const ipDestination = item[3]
  const port = item[4]
  const hostname = item[5]
  if(username_dictionary[username] && ip_source_dictionary[ipSource]
    && ip_destination_dictionary[ipDestination]
    && hostname_dictionary[hostname]) {
      return [time/1000, username, ipSource, ipDestination, String(port), hostname]
    }
})

// const uniqIpSource = [ ...new Set(timeline.map(item => item[2])) ]
// const uniqIpDestination = [ ...new Set(timeline.map(item => item[3])) ]
const uniqPorts = [ ...new Set(timeline.map(item => item[4])) ]
// const uniqHostname = [ ...new Set(timeline.map(item => item[5])) ]

// const newTimeline = timeline.map(item => {
//   return [item[0]/1000, item[1], item[2], item[3], String(item[4]), item[5]]
// })

const getTimelineData = () => ({
  title: {
    left: 'center',
    text: 'Timeline Connectivity at 3:00AM (top 20 users)'
  },
  parallelAxis: [
    { dim: 0, name: 'Time (milli second)' },
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
    data: newTimeline,
    lineStyle: {
      color: '#31A6E0',
      opacity: 1
    },
    // emphasis: {
    //   lineStyle: {
    //     color: 'red'
    //   }
    // },
    inactiveOpacity: 0.01
  },
})

export default getTimelineData
