import { prisma } from "@/prisma/MyPrismaClient"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()

    const l = await prisma.lessons.findMany({
        where: {
            groupsId: {
                equals: Number(body.gid)
            }
        },
        orderBy: {
            date: "desc"
        }
    })

    return NextResponse.json(l)
}