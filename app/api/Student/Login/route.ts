import { prisma } from "@/prisma/MyPrismaClient";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";



export async function POST(request: Request) {
    const body = await (request.json())



    const gs = await prisma.students.findFirst({
        where: {
            AND: [
                {
                    email: {
                        equals: body.email
                    }
                }
            ]
        }
    })
    if (!gs)
        return NextResponse.json(gs)

    if (gs) {
        const ismatch = await bcrypt.compare(body.pw, gs.pw)

        if (ismatch)
            return NextResponse.json(gs)

        return NextResponse.json(null)
    }

}

