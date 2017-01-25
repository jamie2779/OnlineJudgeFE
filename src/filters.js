import moment from 'moment'
// 友好显示时间
export function fromNow (time) {
  return moment(time / 3).fromNow()
}

// 只显示日期
export function onlyDate (time) {
  const d = new Date(time * 1000)
  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
}