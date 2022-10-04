import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', (req, res)=>{
    res.json(
        {
            message: "Hello World"
        }
    )
})


const PORT = 5000
app.listen( PORT, ()=>{
    console.log(`App running in http://localhost:${PORT}`)
} )

