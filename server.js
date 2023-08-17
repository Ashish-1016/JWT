import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import  jwt from 'jsonwebtoken'
import AuthRoutes from './routes/AuthRoutes.js'


const app = express()
app.use(cors())
app.use(express.json())


app.use('/api/v2',AuthRoutes)

app.listen(process.env.PORT||'8000',()=>{
    console.log(`Server listening on ${process.env.PORT}`)
})

