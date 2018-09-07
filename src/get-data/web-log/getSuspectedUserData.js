import suspectedUser from '../../data/web-log/suspect_users_3.1'

const getSuspectedUserData = () => ({
  title: {
    left: 'center',
    text: 'Requests Per User at 3:07'
  },
  tooltip: {},
  series: {
    type: 'treemap',
    data: suspectedUser.map(item => ({
      name: item.email,
      value: item.count
    }))
  },
  color: ['#7A9A5D', '#7D7B71', '#F0867E', '#8FD3CF', '#538E82']
})

export default getSuspectedUserData
