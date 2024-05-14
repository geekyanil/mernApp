const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    // console.log(URI);
    // console.log(await mongoose.connect(URI));
    await mongoose.connect(URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed');
    process.exit(0);
  }
};

module.exports = connectDB;
