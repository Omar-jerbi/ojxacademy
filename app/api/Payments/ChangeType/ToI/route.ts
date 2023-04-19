import { prisma } from "@/prisma/MyPrismaClient"
import { nextmonth, students } from "@prisma/client"
import { NextResponse } from "next/server"



// 2 casi
// da Individual a Individual:
// apdt schedul in students[sid]
// add entry in payments

// da Group a Individual:
// ...


interface body {
    stud: students,
    nm: nextmonth
}

export async function POST(req: Request) {
    const body: body = await req.json()

    if (!body.stud.groupId) {//I to I
        const updt = await prisma.students.update({
            where: {
                id: Number(body.stud.id)
            },
            data: {
                schedule: body.nm.schedule!
            }
        })

        const insrt = await prisma.payments.create({
            data: {
                studentId: body.stud.id,
                monthId: body.nm.id,
                value: 249
            }
        })
    } else {//G to I

    }

    return NextResponse.json(null)

}