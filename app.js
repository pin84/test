const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(8086,()=>{
  console.log('koa is running at port 8086...');
  
});