1.  js文件是一个静态资源， http 1.0 text/js
    image/png
    text/html
    text/css
    动态资源 database 服务器压力很大
    TCP 连接-> HTTP 请求 响应
    连接上限 多线程 ngnix 进程 启动 线程
2.  bootcd.cn 动态 服务器上找数据
    node 读MySQL -> template
    用户量和访问量数量大后 
    ngnix 负载均衡 proxy
    分布式 主从
    用户怎么会来 ip -> url
    分流 
    动态ip -> computer mac
