 const express = require('express')
  const bodyParser = require('body-parser')
  const mongoose = require('mongoose')
   const http  =  require('http')
  const {routes}  = require('./src/routes')
const cors = require('cors')



 mongoose.connect('mongodb://127.0.0.1:27017/mevnshop',
     {
         // useCreateIndex : true,
       //  useNewUrlParser: true ,
       //  useUnifiedTopology : true,
         // useFindAndModify: false,

     }).then(() => console.log('CONNECT SUCCESSFULLY')).catch((err) => console.error(err))

// //инициализация приложения

 const app = express()

//
 app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend : true}))


 routes.forEach((item) => {
     console.log(item)
      app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))
     // app.use(  `/api/${item}` , require(`./src/routes/${item}`))
// app.use(item ,require(`./src/routes/${item}`) )
 })



 // Обьявим наши Роуты
const Port = 3000
http.createServer({} , app).listen(Port)
console.log(`Server is runing at ${Port}`)

