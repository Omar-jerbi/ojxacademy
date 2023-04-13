import { prisma } from "@/prisma/MyPrismaClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await (request.json())

    const gs = await prisma.students.findFirst({
        where: {
            AND: [
                {
                    email: {
                        equals: body.email
                    }
                },
                {
                    pw: {
                        equals: body.pw
                    }
                }
            ]
        }
    })

    return NextResponse.json(gs)
}

