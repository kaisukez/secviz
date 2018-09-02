import loginActivity from '../../data/login-activity/login-activity'

const loginValue = loginActivity.login
const reLoginValue = loginActivity.reLogin
const logoutValue = loginActivity.logout
const timeoutValue = loginActivity.timeout

const getLoginActivityData = () => ({
  title: {
    left: 'center',
    text: 'Login Activity'
  },
  tooltip: {},
  series: {
    type: 'pie',
    radius: [50, 110],
    data: [
      { name: 'login', value: loginValue },
      { name: 'timeout', value: timeoutValue },
      { name: 're-login', value: reLoginValue },
      { name: 'logout', value: logoutValue },
    ]
  },
  color: ['#6733AD', '#FE3A3A', '#2ECB2E', '#FEEC3A']
})

export default getLoginActivityData
