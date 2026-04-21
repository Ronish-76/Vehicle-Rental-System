const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('CONNECTED');
    process.exit(0);
  })
  .catch((err) => {
    console.error('FAILED', err.message);
    process.exit(1);
  });
