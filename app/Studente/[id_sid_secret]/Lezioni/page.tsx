import { getLessonsOfGroup, getLessonsOfStud } from "../../GetLessons";
import { getUser } from "../../GetUser";
import Lez from "./Lez";

interface props {
    params: any
}

export default async function ({ params }: props) {
    const user = await getUser(params)

    if (user) {
        let lessons: any[];
        if (user.schedule)
            lessons = await getLessonsOfStud(params)
        else
            lessons = await getLessonsOfGroup(user.groupId)

        return (
            <div className="bg-gray-950 text-center py-6 flex flex-col justify-center items-center gap-5 border-2 border-white rounded-md">
                <h1 className="underline font-semibold text-lg text-yellow-100">Cronologia lezioni seguite:</h1>
                {
                    lessons.length == 0 ?
                        <div className="text-red-400 font-semibold">
                            Ancora nessuna lezione seguita
                        </div>
                        :
                        lessons.map((l: any, k: number) =>
                            <Lez key={k} lezione={l} />
                        )
                }
            </div>
        );
    } else {
        return (
            <div className="bg-gray-950 text-center py-6 flex flex-col justify-center items-center gap-5 border-2 border-white rounded-md">
                <h1>
                    Invalid req
                </h1>
            </div>
        );
    }
}