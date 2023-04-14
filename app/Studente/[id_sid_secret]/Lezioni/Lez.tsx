interface l {
    desc: string,
    date: string
}

interface props {
    lezione: l
}

function Lez({ lezione }: props) {
    return (
        <>
            <div className="lez grid grid-cols-2 gap-x-7 justify-items-end">
                <div className="col-span-1 cursor-default" title="Data lezione">{lezione.date.replace("T", " ").replace(/....Z/, "")}</div>
                <div className="col-span-1 capitalize cursor-default" title="Descrizione">{lezione.desc}</div>
            </div>
            <hr className="w-1/2 border-0 bg-slate-200" style={{height:"1px"}}/>
        </>
    )
}

export default Lez