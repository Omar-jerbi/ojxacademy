import { prisma } from "@/prisma/MyPrismaClient"
import { NextResponse } from "next/server"


export async function POST(req: Request) {
    const body: { sid: number, gid: number } = await req.json()

    const nm = await prisma.nextmonth.findFirst({
        where: {
            OR: [
                {
                    single_studentId: {
                        equals: body.sid
                    }
                },
                {
                    groupsId: {
                        equals: body.gid
                    }
                }
            ]
        }
    })


    return NextResponse.json(nm)
}