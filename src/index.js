import createServer from './createServer';
import connectDB from './config/database';
import environment from './config/environment';
import logger from './config/logger';

(async () => {
  await connectDB();

  const app = createServer();

  app.listen(environment.PORT, () => {
    logger.info(`Info from <server>: Starting server on port ${environment.PORT}`);
  });
})();
