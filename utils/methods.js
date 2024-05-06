// 获取两个数之间的随机数
export const selectFrom = (startNumber, endNumber) => {

    var choice = endNumber - startNumber + 1;

    return Math.floor(Math.random() * choice + startNumber)
}

/** 两值平方相加并开方 求斜边 */
export const powAndSqrt = (val1, val2) => {
  return Math.sqrt(Math.pow(val1, 2) + Math.pow(val2, 2))
}

let last = 0
export const throttle = (f, wait = 200) => {
  // console.log('1111111', last);
  return function (...args) {
    let now = Date.now()
    if (now - last > wait) {
      last = now
      f.apply(this, args)
    }
  }
}