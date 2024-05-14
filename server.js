require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const AuthRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const serviceRoute = require('./router/service-router');
const adminRoute = require('./router/admin-router');
const cors = require('cors');

const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/api/auth', AuthRoute);
app.use('/api/form', contactRoute);
app.use('/api/data', serviceRoute);

// ADMIN ROUTES
app.use('/api/admin', adminRoute);

app.use(errorMiddleware);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`listening to the port ${PORT}`);
  });
});
