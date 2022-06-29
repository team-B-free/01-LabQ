import app from '../index.js';
import { logger } from '../config/winson.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`${process.env.NODE_ENV} - API Server Start at Port ${PORT}`);
});