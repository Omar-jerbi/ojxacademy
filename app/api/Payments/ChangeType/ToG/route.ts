import { prisma } from "@/prisma/MyPrismaClient"
import { Prisma, nextmonth, students } from "@prisma/client"
import { NextResponse } from "next/server"

interface body {
    stud: students,
    nm: nextmonth
}

//GtoG oppure I to G
// g to g
//updt schedule in group (ogni membro del gruppo fara questa op but idgaf)
//new paymente
// IGNORE DA IMPOSTARE MANUALEMTE A FALSE SOLO 
// QUANDO TUTTI I MEMBRI DEL GRUPPO HANNO PAGATO

// i to g
// rem schedule students
//oktochange false
//gid(stud) = nm.gid
//nm => ignore = true
//new paymente
// QUANDO UNO VUOLE PASSARE A GRUPPO => impostare
// manualmente il gid del gruppo di arrivo in students per tale studente (lasciare
// lo schedule inserito!) + in NextMonth: entry senza schedule con sia sid che gid


export async function POST(req: Request) {
    const body: body = await req.json()

    // G to G
    if (!body.stud.schedule) {
        const u = await prisma.groups.update({
            where: {
                id: Number(body.stud.groupId)
            },
            data: {
                schedule: body.nm.schedule!
            }
        })
    } else {//i to g
        const us = await prisma.students.update({
            where: {
                id: Number(body.stud.id)
            },
            data: {
                schedule: Prisma.JsonNull,
                oktochange: false,
                groupId: Number(body.nm.groupsId)
            }
        })

        const un = await prisma.nextmonth.update({
            where: {
                id: Number(body.nm.id)
            },
            data: {
                ignore: true
            }
        })
    }

    const insrt = await prisma.payments.create({
        data: {
            studentId: Number(body.stud.id),
            monthId: Number(body.nm.id),
            value: 149
        }
    })


    return NextResponse.json(null)
}