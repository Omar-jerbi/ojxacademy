import { prisma } from "@/prisma/MyPrismaClient"
import { NextResponse } from "next/server"


export async function POST(req: Request) {
    const body: { sid: number, gid: number } = await req.json()

    const nm = await prisma.nextmonth.findFirst({
        where: {
            OR: [
                {
                    AND: [
                        {
                            single_studentId: {
                                equals: Number(body.sid)
                            }
                        },
                        {
                            ignore: {
                                equals: false
                            }
                        }
                    ]
                },
                {
                    AND: [
                        {
                            groupsId: {
                                equals: Number(body.gid)
                            },
                        },
                        {
                            ignore: {
                                equals: false
                            }
                        }
                    ]
                }
            ]
        }
    })


    return NextResponse.json(nm)
}