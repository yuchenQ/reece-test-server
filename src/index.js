import { connect, connection } from 'mongoose';
import dotenv from 'dotenv';
import createServer from './createServer';

dotenv.config();

connect(process.env.ATLAS_URI, { useUnifiedTopology: true, useNewUrlParser: true });

connection.once('open', () => {
  console.log('Info from <db>: MongoDB Atlas connected successfully');
});

const PORT = process.env.PORT || 8000;
const app = createServer();

app.listen(PORT, () => {
  console.log(`Info from <server>: Starting server on port ${PORT}`);
});
