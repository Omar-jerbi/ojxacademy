interface props {
    classes?: string
}




export default function FormMail({ classes }: props) {
    return (
        <div className={"formmail " + classes}>
            <div className="tit">
                Oppure scrivici direttamente qui il tuo messaggio:
            </div>
            <div className="form">
                <input type="text" placeholder="La tua email..." />
                <textarea placeholder="Il tuo messaggio..."></textarea>
            </div>
            <div className="btt">
                <button><span>Invia</span></button>
            </div>

        </div>
    )
}
