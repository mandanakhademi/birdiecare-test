import * as dotenv from 'dotenv';
import app from './application';

dotenv.config();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});
