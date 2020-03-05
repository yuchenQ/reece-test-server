import cors from '@koa/cors';
import Router from '@koa/router';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaQs from 'koa-qs';
import { pickAll } from 'ramda';
import errorHandler from './middlewares/errorHandler';
import APIRouter from './routes/index';

export default function createServer() {
  const app = new Koa();
  const router = new Router();

  router.use(
    errorHandler,
    async (ctx, next) => {
      console.log('Info from <server>: GOT REQUEST', {
        request: pickAll(['method', 'url'], ctx.req),
      });

      await next();
    },
    APIRouter.routes(),
  );

  app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(ctx => console.error(`Error from <server>: ${ctx.path} is missing`));

  return koaQs(app, 'extended');
}
