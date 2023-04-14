import { prisma } from "@/prisma/MyPrismaClient"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt";



export async function POST(req: Request) {
    const body = await req.json()

    const h = await bcrypt.hash(body.newpw, 12)

    try {
        const res = await prisma.students.update({
            where: {
                id: Number(body.id)
            },
            data: {
                pw: h
            }
        })

        return NextResponse.json(res)
    }
    catch (err) {
        return NextResponse.json(null)
    }
}