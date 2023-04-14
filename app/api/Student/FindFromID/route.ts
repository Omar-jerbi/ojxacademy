import { prisma } from "@/prisma/MyPrismaClient"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()

    const user = await prisma.students.findUnique({
        where: {
            id: Number(body.id)
        },
        include: { group: true }
    })

    return NextResponse.json(user)

}