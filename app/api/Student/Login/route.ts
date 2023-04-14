import { prisma } from "@/prisma/MyPrismaClient";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";



export async function POST(request: Request) {
    const body = await (request.json())

    const gs = await prisma.students.findFirst({
        where: {
            email: {
                equals: body.email
            }
        }
    })

    if (!gs)
        return NextResponse.json(gs)

    if (gs) {
        const ismatch = await bcrypt.compare(body.pw, gs.pw)

        if (ismatch) {
            await prisma.tokens.upsert({
                create: {
                    studentsId: gs.id,
                    secret: Math.floor(Math.random() * 9999)
                },
                update: {
                    secret: Math.floor(Math.random() * 9999)
                },
                where: {
                    studentsId: gs.id
                }
            })

            const t = await prisma.tokens.findFirst({
                where: {
                    studentsId: {
                        equals: gs.id
                    }
                }
            })

            return NextResponse.json(t)
        }

        return NextResponse.json(null)
    }

}

