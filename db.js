// const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose') 
require('dotenv').config();


// 1.define the mongodb connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL

// localhost:27017

//2.set up mongodb connections 
// mongoose.connect(mongoURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });


// 2. Set up MongoDB connection
mongoose.connect(mongoURL)
 





//3.access the default  connection object
//mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;

//4.define event listener for database connection
db.on('connected', ()=>{
    console.log('Connected to MongoDB server')
})

//5.
db.on('error', (err)=>{
    console.log(' MongoDB connection error')
})

db.on('disconnected', ()=>{
    console.log('  MongoDB disconnected')
})


//6.Export the database connection
module.exports = db;





