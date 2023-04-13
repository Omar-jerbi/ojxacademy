import { prisma } from "@/prisma/MyPrismaClient";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const gs = await prisma.groups.findMany({
        include: {
            students: true
        }
    })

    return NextResponse.json(gs)
}

export async function POST(request: Request) {
    const gs = await prisma.students.findMany({
        include: {
            group: true
        }
    })

    return NextResponse.json(gs)
}