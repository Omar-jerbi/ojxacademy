import { getUser } from "../GetUser";
import Sch from "./Sch"

interface props {
    params: any
}


export default async function ({ params }: props) {
    const user = await getUser(params)

    return (
        <div className="bg-gray-950 text-center py-6 px-3 flex flex-col justify-center items-center gap-5 border-2 border-white rounded-md">

            <h1 className="underline">Tipologia lezioni:</h1>
            <h2 className="text-yellow-100 font-semibold">{user.schedule ? "Individuali" : "In gruppo"}</h2>
            <hr className="border-0 outline-none bg-slate-50 w-1/2" style={{ height: "1px" }} />

            <h1 className="underline">Agenda settimanale:</h1>
            {
                user.schedule ?
                    user.schedule.map((d: any, k: number) =>
                        <Sch key={k} day={d} />
                    )
                    :
                    user.group.schedule.map((d: any, k: number) =>
                        <Sch key={k} day={d} />
                    )
            }

        </div>
    );
}