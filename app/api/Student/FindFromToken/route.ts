import { prisma } from "@/prisma/MyPrismaClient"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()

    const stud = await prisma.tokens.findFirst({
        where: {
            AND: [
                {
                    secret: {
                        equals: Number(body.secret)
                    }
                },
                {
                    studentsId: {
                        equals: Number(body.sid)
                    }
                },
                {
                    id: {
                        equals: Number(body.id)
                    }
                }
            ]
        },
        include: {
            student: true,
        }
    })


    if (!stud?.student.groupId) {
        return NextResponse.json(stud)
    } else {
        const studgrp = await prisma.students.findFirst({
            where: {
                id: {
                    equals: stud.studentsId
                }
            },
            include: {
                group: true
            }
        })

        return NextResponse.json(studgrp)
    }
}