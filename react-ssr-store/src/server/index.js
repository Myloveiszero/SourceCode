import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Header from '../common/Header';

const app = express();
app.use(express.static('public'))
app.get('*', (req, res) => {
  // 请求 是在 后端
  Header.loadData().then(r => {
    const htmlStr = renderToString(<Header />);
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${htmlStr}</div>
      <script>window.songs = ${JSON.stringify(r.data)}</script>
      <script src="/index.js"></script>
    </body>
    </html>
    `)
  })
  
  // <div>hello world</div>
  
})
// 渲染 react 组件
app.listen(9090, () => {
  console.log('server is running 9090');
})
