import express from 'express'
import bodyParser from 'body-parser'

import routerBlog from './app/routes/Blog.js'
import mongoose from 'mongoose'

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/blogs', routerBlog )

mongoose.connect('mongodb://localhost:27017/personal-blog', ()=>{
    console.log('database connected!!!')
})

const PORT = 5000
app.listen( PORT, ()=>{
    console.log(`App running in http://localhost:${PORT}`)
} )

