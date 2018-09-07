import requestPerMinute from '../../data/web-log/request_per_minute_3.1'

const dateList = requestPerMinute.map(item => item[0])
const valueList = requestPerMinute.map(item => item[1])

const getRequestPerMinuteData = () => ({
  title: {
    left: 'center',
    text: 'Requests Per Minute'
  },
  tooltip: {
    trigger: 'axis'
  },
  visualMap: {
    show: false,
    type: 'continuous',
    seriesIndex: 0,
    min: 0,
    max: 6000,
    inRange: {
        color: ['lightgrey', '#2E64B0', '#222222']
    }
  },
  xAxis: {
    type: 'category',
    data: dateList
  },
  yAxis: {
    type: 'value'
  },
  series: {
    type: 'line',
    data: valueList,
  },
  // color: ['#31ABD4']
})

export default getRequestPerMinuteData
