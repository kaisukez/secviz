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
  series: {
    type: 'pie',
    radius: [30, 110],
    roseType: 'radius',
    data: [
      { name: 'login', value: loginValue },
      { name: 're-login', value: reLoginValue },
      { name: 'logout', value: logoutValue },
      { name: 'timeout', value: timeoutValue },
    ]
  }
})

export default getLoginActivityData
