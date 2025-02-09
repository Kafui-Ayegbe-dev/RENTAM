const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const paymentRoute = require('./routes/stripe')
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log('db connection successful'))
    .catch((err) => {
        console.log(err)
})


app.use(cors());
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)
app.use('/api/payments', paymentRoute)

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Backend is running on port FIVE THOUSAND')
})