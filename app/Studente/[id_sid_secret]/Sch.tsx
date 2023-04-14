interface week {
    d: string,
    f: string,
    t: string,
}

interface props {
    day: week
}

export default function Sch({ day }: props) {
    return (
        <div className="schedule">
            {day.d} <br />
            {day.f} <br />
            {day.t} <br />
        </div>
    )
}
