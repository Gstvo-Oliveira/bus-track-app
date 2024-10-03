import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import bcrypt from 'bcrypt'

export const router = Router()
const prisma = new PrismaClient()


router.post('/register', async(req, res)=>{
    const {name, email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10)

    try{
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password: hashedPassword
            }
        })

        res.status(201).json(user)
    }catch(error){
        res.status(400).json({
            error: 'Erro ao cadastrar usuário'
        })
    }
})

