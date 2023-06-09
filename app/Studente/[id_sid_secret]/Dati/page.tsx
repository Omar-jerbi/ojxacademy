import { getUser } from "../../GetUser";
import PWin from "./comps/PWin";


interface props {
    params: any
}

export default async function ({ params }: props) {
    const x = await getUser(params)

    return (
        <div className="bg-gray-950 text-center py-6 flex flex-col justify-center items-center gap-5 border-2 border-white rounded-md">
            <div className="capitalize">
                <h1>Nome:</h1>
                {x.name}
            </div>

            <div className="capitalize">
                <h1>Cognome:</h1>
                {x.familyname}
            </div>

            <div>
                <h1 className="capitalize">Email:</h1>
                {x.email}
            </div>

            <hr className="border-0 w-3/6 outline-none bg-white h-[1px]" />

            <div className="grid grid-cols-12 gap-5 w-3/6">
                <h1 className="col-span-12">Modifica Password:</h1>
                <PWin id={Number(params.id_sid_secret.split('_')[1])} />
            </div>

        </div>
    );
}