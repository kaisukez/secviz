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
  // color: ['#31ABD4']
})

export default getSuspectedUserData
