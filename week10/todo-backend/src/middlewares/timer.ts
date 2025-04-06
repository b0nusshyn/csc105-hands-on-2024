import {type Context , type Next , } from "hono";

async function timerMiddleMiddleware(c: Context, next: Next){
  const start = Date.now();
  console.log('Record start time')
  await next();
  console.log('Controller finished')
  const time = Date.now() - start;
  console.log(c.req.path + "Takes " + time + 'ms');
}

export { timerMiddleMiddleware }