import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv'


dotenv.config()

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Api de ônibus rodando')
});

const PORT = process.env.PORT ||3000

app.listen(PORT, () =>{
    console.log(`server running in port ${PORT}`)
});