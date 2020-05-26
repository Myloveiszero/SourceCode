const Mykoa = require('./lib/application');

const app = new Mykoa();

app.use((req, res) => {
    res.end("hello world!")
    });

app.listen(3000, () => {
    console.log('你的应用在3000端口运行！');
})