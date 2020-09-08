
  const mid1 = (next) => (action) => {
    console.log('mid1 start')
    if (typeof action === 'function') {
        return action()
    }
    return next(action)
}
const mid2 = (next) => (action) => {
    console.log(next.toString())
    console.log('mid2 start')
    next()
    console.log('mid2 end')
}
//redux 已经加载完两个中间件
const middlewares = [mid1, mid2]

//compose flow
function myFlow(fns) {
    // 组合所有的 函数
    // fn3(fn2(fn1()))
    return function(defaultVal) {
      let res = defaultVal;
      while(fns.length) {
        let fisrt = fns.shift();
        res = fisrt(res);
      }
      return res;
    }
  }
  
  const chain = myFlow(middlewares)
  let nbDispatch = chain(() => {
      console.log(`就是 redux 源码内部最原始只能处理 action 是纯对象的 dispatch函数`)
  })
//   mid 返回的是一个函数
// fn3(fn2(fn1())) 中间件得到的上一个结果 也是一个函数
nbDispatch({a: 1})

// myFlow 的过程就是把各个函数组合成mid2(mid1(nbDispatch()))的结构，然后执行mid2()这个高阶函数

