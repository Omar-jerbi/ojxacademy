"use client"

import { useState } from "react"
import Loader from "../Loader/Loader"


interface props {
    classes?: string
}

export default function FormMail({ classes }: props) {
    const [mail, smail] = useState("")
    const [msg, smsg] = useState("")

    const [l, sl] = useState(false)


    const send = async () => {
        if (mail != '' && msg != '') {
            sl(true)
            await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    user_id: 'uwCGgOFp3VSHCQIwE',                    
                    service_id: 'service_lxzcd9l',
                    template_id: 'template_piam30a',
                    template_params: {
                        'site': 'OJXACADEMY',
                        'subj': 'msg da home page',
                        'client_mail': mail,
                        'text': msg
                    }
                })
            })
                .then(res => {
                    sl(false)
                    alert("Messaggio inviato con successo. Ti risponderemo per e-mail il prima possibile!")
                })
        }
    }

    return (
        <div className={"formmail  flex flex-col items-center gap-1 " + classes}>
            <div className="tit">
                Oppure scrivici direttamente qui il tuo messaggio:
            </div>
            <div className="form flex flex-col w-3/6 max-sm:w-5/6 gap-2 text-black">
                <input className="rounded pl-1" type="text" placeholder="La tua email..." onChange={(e) => smail(e.target.value)} />
                <textarea className="rounded pl-1 resize-none min-h-[150px]" placeholder="Il tuo messaggio..." onChange={(e) => smsg(e.target.value)} />
            </div>
            <div className="btt">
                <button onClick={() => send()}>
                    {l ?
                        <Loader height="h-4" />
                        :
                        <span>Invia</span>
                    }
                </button>
            </div>

        </div>
    )
}
