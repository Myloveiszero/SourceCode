const http = require('http');


class MyKoa {
  constructor() {
    //手写代码  源码分析
    console.log('管式koa手写')
    this.fn = undefined;
  }
  // listen    use
  // 有没有什么es6 的写法， 可以替代？   
  listen(...args) { // 抽象 
    // 欢哥  createServer
    let server = http.createServer();
    server.listen(...args); // 怎么写？ 
  }


  use (fn) {
    this.fn = fn;

  }
}



module.exports = MyKoa