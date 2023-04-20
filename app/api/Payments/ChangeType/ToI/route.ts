import { prisma } from "@/prisma/MyPrismaClient"
import { nextmonth, students } from "@prisma/client"
import { NextResponse } from "next/server"



// 2 casi
// da Individual a Individual:
// apdt schedul in students[sid]
// add entry in payments
// ignore(N.M.) => true


// da Group a Individual:
// add schedul in students[sid]
// rem gid in students[sid]
// oktochange => false
// add entry in payments
// ignore(N.M.) => true





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
    } else {//G to I
        const updt = await prisma.students.update({
            where: {
                id: Number(body.stud.id)
            },
            data: {
                schedule: body.nm.schedule!,
                groupId: null,
                oktochange: false
            }
        })
    }


    const insrt = await prisma.payments.create({
        data: {
            studentId: Number(body.stud.id),
            monthId: Number(body.nm.id),
            value: 249
        }
    })

    const ignore = await prisma.nextmonth.update({
        where: {
            id: Number(body.nm.id)
        },
        data: {
            ignore: true
        }
    })

    return NextResponse.json(null)

}