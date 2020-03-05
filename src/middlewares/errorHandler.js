import { pickAll } from 'ramda';

export default async function errorHandler(ctx, next) {
  try {
    decodeURIComponent(ctx.path);

    await next();
  } catch (error) {
    if (error instanceof URIError) {
      console.error('Error from <server>: INVALID REQUEST URL', {
        request: pickAll(['method', 'url'], ctx.req),
      });

      ctx.status = 404;
    } else {
      ctx.status = error.status || 500;
      ctx.body = { type: error.type || 'unknown', message: error.message };
    }
  }
}
