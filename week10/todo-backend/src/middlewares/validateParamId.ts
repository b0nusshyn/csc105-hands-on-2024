import {type Context , type Next , } from "hono";

async function validateParamId(c: Context, next: Next) {
  const idParam = c.req.param('id');
  if (!/^\d+$/.test(idParam)) {
      return c.json({
          success: false,
          msg: 'Invalid Param',
      });
  }
  c.set('id', parseInt(idParam));
  await next();
}

export {validateParamId}