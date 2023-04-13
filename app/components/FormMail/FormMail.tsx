interface props {
    classes?: string
}

export default function FormMail({ classes }: props) {
    return (
        <div className={"formmail  flex flex-col items-center gap-1 " + classes}>
            <div className="tit">
                Oppure scrivici direttamente qui il tuo messaggio:
            </div>
            <div className="form flex flex-col w-3/6 max-sm:w-5/6 gap-2 text-black">
                <input className="rounded pl-1" type="text" placeholder="La tua email..." />
                <textarea className="rounded pl-1 resize-none min-h-[150px]" placeholder="Il tuo messaggio..."></textarea>
            </div>
            <div className="btt">
                <button><span>Invia</span></button>
            </div>

        </div>
    )
}
