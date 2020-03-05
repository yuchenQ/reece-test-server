import { connect, connection } from 'mongoose';
import dotenv from 'dotenv';
import createServer from './createServer';

dotenv.config();

connect(process.env.ATLAS_URI, { useUnifiedTopology: true, useNewUrlParser: true });

connection.once('open', () => {
  console.log('Info from <db>: MongoDB Atlas connected successfully');
});

const port = process.env.SERVER_PORT || 8000;
const app = createServer();

app.listen(port, () => {
  console.log(`Info from <server>: Starting server on port ${port}`);
});
