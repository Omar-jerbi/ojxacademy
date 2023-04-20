import { students } from "@prisma/client";
import { getUser } from "../../GetUser";
import Individual from "./Individual";
import Group from "./Group";

interface props {
    params: any
}

export default async function ({ params }: props) {
    const user: students = await getUser(params)    

    return (
        <div className="bg-gray-950 text-center py-6 px-2 flex flex-col justify-center items-center gap-5 border-2 border-white rounded-md max-sm:mt-36">
            <h1 className="underline">Sezione pagamenti</h1>
            <h2>Il mio ultimo servizio acquistato: <span className="text-yellow-200 font-semibold">{user.schedule ? "Lezioni individuali" : "Lezioni in gruppo"}</span> </h2>
            <hr />

            <span className="underline underline-offset-2 decoration-yellow-500">Sei pregato/a nel caso volessi cambiare piano di lezioni (per esempio passado dalle lezioni individuali e quelle in gruppo) di contattare il tuo istruttore o di mandare una mail a info@ojxwebdev.com</span>

            <div className="cards flex justify-evenly w-full">
                <Individual stud={user} sid={user.id} showing={(user.oktochange || user.schedule) ? true : false} />

                <Group stud={user} gid={user.groupId} showing={(user.oktochange || !user.schedule)} />
            </div>
            


        </div>
    );
}