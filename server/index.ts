import express, { Response, Request } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/index';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, http://localhost${PORT}`);
})