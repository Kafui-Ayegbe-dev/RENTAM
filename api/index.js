const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log('db connection successful'))
    .catch((err) => {
        console.log(err)
})

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Backend is running on port FIVE THOUSAND')
})