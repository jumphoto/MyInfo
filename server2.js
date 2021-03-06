if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path:'.env'})
}
const express = require('express')
const app = express()
//const jwt = require('jsonwebtokens')
const expressLayouts = require('express-ejs-layouts')
const bodyparser = require('body-parser')

/*
const posts =[
   {
        username: 'Jim',
        title: 'Post 1'
   } 
]
app.get('/posts', async (req, res,) => {
    res.json(posts)
})
app.post('/login', async (req, res,) => {
    //Authentication
    const username = req.body.username
    const user = {name:surname}
    const acessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({acessToken:acessToken})
})
*/

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const infoRouter = require('./routes/infos')


app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyparser.urlencoded({limit: '10mb', extended:false}))

const mongoose = require('mongoose')
const { JsonWebTokenError } = require('jsonwebtoken')
mongoose.connect(process.env.DATABASE_URL,{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('error', () => console.log('Connected to Mongoose'))

app.use('/',indexRouter)
app.use('/users', userRouter)
app.use('/infos', infoRouter)
//app.use(express.json())

app.listen(process.env.PORT || 4000)
