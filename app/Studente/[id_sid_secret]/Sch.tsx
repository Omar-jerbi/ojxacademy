export interface week {
    d: string,
    f: string,
    t: string,
}

interface props {
    day: week
}

export default function Sch({ day }: props) {
    return (
        <div className="schedule grid grid-cols-3 w-2/3 gap-x-6 ">
            <div className="col-span-1 capitalize">{day.d}</div>
            <div className="col-span-1"><span className="text-yellow-100 text-xs">inizio</span>{day.f}</div>
            <div className="col-span-1"><span className="text-yellow-100 text-xs">fine</span>{day.t}</div>

            <hr className="col-span-3" />
        </div>
    )
}
