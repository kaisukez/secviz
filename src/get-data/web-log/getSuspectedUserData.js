import suspectedUser from '../../data/web-log/suspec_users_3.1'

const getSuspectedUserData = () => ({
  title: {
    left: 'center',
    text: 'Requests Per Minute'
  },
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
