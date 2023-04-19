"use client"

import { useState } from "react"
import Loader from "../Loader/Loader"
import swal from "sweetalert"

interface props {
    classes?: string
}

export default function FormMail({ classes }: props) {
    const [mail, smail] = useState("")
    const [msg, smsg] = useState("")

    const [l, sl] = useState(false)


    const send = async () => {
        if (mail != '' && msg != '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            sl(true)
            await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    user_id: process.env.NEXT_PUBLIC_EMAILJS_USER,
                    service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
                    template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
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
                    swal("Messaggio inviato con successo. Ti risponderemo per e-mail il prima possibile!")
                })
        }
        else {
            if (msg == '')
                swal("", "Il tuo messaggio non può essere vuoto", "error")
            else
                swal("", "Controlla l'indirizzo e-mail inserito", "error")
        }
    }

    return (
        <div className={"formmail  flex flex-col items-center gap-1 " + classes}>
            <div id="sizereact" className="tit mb-3">
                Oppure scrivici direttamente qui il tuo messaggio:
            </div>
            <div className="form flex flex-col w-3/6 max-sm:w-5/6 gap-2 text-black">
                <input className="text-lg rounded pl-1 outline-none" type="text" placeholder="La tua email..." onChange={(e) => smail(e.target.value)} />
                <textarea className="text-lg rounded pl-1 resize-none min-h-[150px] outline-none" placeholder="Il tuo messaggio..." onChange={(e) => smsg(e.target.value)} />
            </div>
            <div className="btt">
                <button className="text-xl text-orange-300 tracking-wider font-semibold  border-2 rounded-md border-orange-300 mt-2 py-1 px-11 transition-all hover:text-white hover:border-white" onClick={() => send()}>
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
