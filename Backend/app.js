const express = require ('express');
const app = express();
const errorMiddleware = require('./middlewares/error');
const auth = require('./routes/auth');
const products = require('./routes/products');
const order = require('./routes/order')
const cookieParser = require('cookie-parser'); //cookie-parser package

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1',products);
app.use('/api/v1',auth);
app.use('/api/v1',order);



app.use(errorMiddleware);

module.exports = app;