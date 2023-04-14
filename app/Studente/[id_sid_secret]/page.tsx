import Sch from "./Sch"

interface props {
    params: any
}

const getUser = async (id: number, sid: number, secret: number) => {
    const u = await fetch(process.env.API_URL + "api/Student/FindFromToken", {
        method: "POST",
        body: JSON.stringify({ id: id, sid: sid, secret: secret })
    })
    const x = await u.json()
    return x
}


export default async function ({ params }: props) {
    const user = await getUser(
        Number(params.id_sid_secret.split('_')[0]),
        Number(params.id_sid_secret.split('_')[1]),
        Number(params.id_sid_secret.split('_')[2]),
    )

    return (
        <div className="bg-gray-950 text-center py-6 flex flex-col justify-center items-center gap-5 border-2 border-white rounded-md">

            <h1>Tipologia lezioni:  </h1>
            <h2>{user.schedule ? "Studente individuale" : "Studente in gruppo"}</h2>
            <hr />

            <h1>Agenda settimanale:</h1>
            {
                user.schedule ?
                    user.schedule.map((d: any) =>
                        <Sch day={d} />
                    )
                    :
                    user.group.schedule.map((d: any) =>
                        <Sch day={d} />
                    )
            }
        </div>
    );
}