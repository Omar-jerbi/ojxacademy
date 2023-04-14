import { prisma } from "@/prisma/MyPrismaClient"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()

    const less = await prisma.lessons.findMany({
        where: {
            single_studentId: {
                equals: Number(body.sid)
            }
        },
        orderBy: {
            date: "desc"
        }
    })

    return NextResponse.json(less)

}