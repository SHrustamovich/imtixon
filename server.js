const express = require('express')
const ejs = require('ejs')
const cookieParser = require('cookie-parser')
const app = express()
const port = process.env.PORT || 9000
const router = require('./controller')
//
app.use(express.json())
app.use(cookieParser())
app.set('view engine','ejs')
app.use('/assets', express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(router)


app.listen(port,console.log('create server'))