import { DiffSec } from './DiffSec';
import './Home.scss';
import FormMail from './components/FormMail/FormMail';

export default function Home() {
  return (
    <div className="homecontainer">

      <div className="home bg-black flex justify-center items-center relative" style={{ minHeight: "100vh" }}>
        <div className="tit">
          <h1 className="font-semibold">Impara l'arte dello sviluppo web!</h1>
        </div>

        <span className='text-red-300/10 underline underline-offset-2 leading-8 flex flex-col justify-center items-center gap-1 absolute bottom-1 w-9/12'>
          <div className='font-semibold text-lg max-sm:text-sm'>
            Scopri di più
          </div>

          <div>
            <svg className='h-5 fill-red-300/10 max-sm:h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" /></svg>
          </div>
        </span>
      </div>


      <div className="home pres flex justify-center items-center relative" style={{ minHeight: "100vh" }}>
        <div className="wrapper w-10/12 mx-auto  h-[70vh] relative">
          <div className="transition-all hover:z-10 hover:scale-105 drop-shadow-md rounded-md first w-4/6 h-[40vh] border-2 border-black bg-white text-black absolute top-0 left-0 flex justify-center items-center overflow-y-auto py-3 px-3 : max-sm:items-start">
            <label id='sizereact'>
              OJXacademy offre lezioni di sviluppo web altamente personalizzate per adattarsi alle tue esigenze. Verrai seguito da un unico professionista del settore che ti insegnerà le basi della programmazione di siti internet oltre a vari trucchi del mestiere che ti aiuteranno a realizzare i tuoi progetti.
              <br />
              Le lezioni avvengono online su Discord garantendo cosi la flessibilità degli orari in base ai tuoi impegni. Potrai scegliere una delle dua modalita di partecipazione: Individuale o in gruppo con altre 4 persone.
              <br />
              Imparerai a sviluppare applicazioni web full-stack basate sulle tecnologie più richieste sul mercato come Javascript, React, NextJs, MongoDb e molte altre...
            </label>
          </div>

          <div className="transition-all hover:z-10 hover:scale-105 drop-shadow-md rounded-md second w-4/6 h-[40vh] border-2 border-white bg-black text-white absolute bottom-0 right-0 flex justify-center items-center overflow-y-auto py-3 px-3 max-sm:items-start">
            <label  id='sizereact'>
              Oltre alle lezioni, ti verranno assegnati periodicamente progetti inerenti ai temi
              appresi durante il corso. La realizzazione di questi progetti ti aiuterà a consolidare ulteriormente le tue competenze da sviluppatore web.
              <br />
              Non imparerai solo a scrivere codice, bensi ti verra insegnato ad utilizzare tutto un insieme di tools indispensabili per lo sviluppo web: da programmi per il Design di interfacce a strumenti per l'hosting e la messa in funzione del prodotto finale.
            </label>
          </div>
        </div>

        <span className='text-yellow-300/70 underline underline-offset-2 leading-8 flex flex-col justify-center items-center gap-1 absolute bottom-1 w-9/12'>
          <div className='font-semibold text-lg max-sm:text-sm'>
            Cosa apprenderai in OJXacademy
          </div>

          <div>
            <svg className='h-5 fill-yellow-300/70 max-sm:h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" /></svg>
          </div>
        </span>

      </div>


      <div className="home goals flex justify-center items-center relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <article className="wrapper leading-tight w-10/12 mx-auto h-[70vh] relative grid grid-cols-3 gap-5 z-10">
          <span id='sizereact' className="tit col-span-3 text-center">Alcune delle principali tematiche affrontate nei corsi OJXacademy:</span>
          <hr className="col-span-3 border-0 outline-none bg-gradient-to-l from-transparent via-white to-transparent" style={{ height: "1px" }} />
          <div className="shadow-md shadow-slate-900 transition-all hover:scale-105 circle  bg-white py-3 px-3 text-black col-span-1 aspect-square rounded-full flex justify-center items-center max-h-52 text-center max-sm:text-xs lg:mx-auto">Fondamenta di Html, Css, Js e molto altri</div>
          <div className="shadow-md shadow-slate-900 transition-all hover:scale-105 circle  bg-white py-3 px-3 text-black col-span-1 aspect-square rounded-full flex justify-center items-center max-h-52 text-center max-sm:text-xs lg:mx-auto">Design di interfacce web responsive</div>
          <div className="shadow-md shadow-slate-900 transition-all hover:scale-105 circle  bg-white py-3 px-3 text-black col-span-1 aspect-square rounded-full flex justify-center items-center max-h-52 text-center max-sm:text-xs lg:mx-auto">Terminologia tecnica</div>
          <div className="shadow-md shadow-slate-900 transition-all hover:scale-105 circle  bg-white py-3 px-3 text-black col-span-1 aspect-square rounded-full flex justify-center items-center max-h-52 text-center max-sm:text-xs lg:mx-auto">Sviluppo basato su componenti</div>
          <div className="shadow-md shadow-slate-900 transition-all hover:scale-105 circle  bg-white py-3 px-3 text-black col-span-1 aspect-square rounded-full flex justify-center items-center max-h-52 text-center max-sm:text-xs lg:mx-auto">Utilizzo di tools per la progettazione</div>
          <div className="shadow-md shadow-slate-900 transition-all hover:scale-105 circle  bg-white py-3 px-3 text-black col-span-1 aspect-square rounded-full flex justify-center items-center max-h-52 text-center max-sm:text-xs lg:mx-auto">Uso di versioning systems</div>
          <div className="shadow-md shadow-slate-900 transition-all hover:scale-105 circle  bg-white py-3 px-3 text-black col-span-1 aspect-square rounded-full flex justify-center items-center max-h-52 text-center max-sm:text-xs lg:mx-auto">Uso di Frameworks e librerie</div>
          <div className="shadow-md shadow-slate-900 transition-all hover:scale-105 circle  bg-white py-3 px-3 text-black col-span-1 aspect-square rounded-full flex justify-center items-center max-h-52 text-center max-sm:text-xs lg:mx-auto">Messa in produzione dei progetti</div>
          <div className="shadow-md shadow-slate-900 transition-all hover:scale-105 circle  bg-white py-3 px-3 text-black col-span-1 aspect-square rounded-full flex justify-center items-center max-h-52 text-center max-sm:text-xs lg:mx-auto">Progettazione di Database</div>
          <div className="shadow-md shadow-slate-900 transition-all hover:scale-105 circle  bg-white py-3 px-3 text-black col-span-1 aspect-square rounded-full flex justify-center items-center max-h-52 text-center max-sm:text-xs lg:mx-auto">Coding lato server</div>
          <div className="shadow-md shadow-slate-900 transition-all hover:scale-105 circle  bg-white py-3 px-3 text-black col-span-1 aspect-square rounded-full flex justify-center items-center max-h-52 text-center max-sm:text-xs lg:mx-auto">Possibilità di entrare nel team OJX</div>
          <div className="shadow-md shadow-slate-900 transition-all hover:scale-105 circle  bg-white py-3 px-3 text-black col-span-1 aspect-square rounded-full flex justify-center items-center max-h-52 text-center max-sm:text-xs lg:mx-auto">E molto altro...</div>
        </article>

        <div id='cyancircle' className="bgcircle absolute h-[125vh] w-[125vh] bg-sky-400 aspect-square rounded-full bottom-[-25vh] left-[-25vh] z-0 blur-3xl opacity-80"></div>
        <div id='purplecircle' className="bgcircle absolute h-[125vh] w-[125vh] bg-purple-400 aspect-square rounded-full top-[-25vh] right-[-25vh] z-0 blur-3xl opacity-60"></div>

        <span className='text-orange-950/60 underline underline-offset-2 leading-8 flex flex-col justify-center items-center gap-1 absolute bottom-1 w-9/12'>
          <div className='font-semibold text-lg max-sm:text-sm'>
            Piani e costi mensili
          </div>

          <div>
            <svg className='h-5 fill-orange-950/60 max-sm:h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" /></svg>
          </div>
        </span>

      </div>



      <article className="home infos relative flex justify-center items-center bg-gradient-to-t from-transparent from-0% to-gray-900 to-55%" style={{ minHeight: "100vh" }}>
        <div className="wrapper w-10/12 mx-auto h-[70vh] relative grid grid-cols-2 gap-7 max-sm:gap-5">
          <div className="col-span-1 max-lg:col-span-2">
            <div className="text-center">
              <div className="tit text-4xl font-semibold my-4 max-sm:text-lg"><span className='align-sub'>Lezioni in gruppo</span><span id='price' className='font-thin underline text-green-500 align-super text-3xl max-sm:text-base'>149€</span></div>
              <div className="val font-semibold text-sm max-sm:text-xs">
                Gruppi di 3 persone (+ istruttore)
                <div className="my-4 max-sm:my-0"></div>
                Esercizi adeguati alle skills del gruppo
                <div className="my-4 max-sm:my-0"></div>
                Orari delle lezioni da concordare insieme agli altri membri
                <div className="my-4 max-sm:my-0"></div>
                Consigliato a chi ha già una minima esperienza di programmazione e vuole apprendere nuove skills
              </div>
            </div>
          </div>

          <div className="col-span-1 max-lg:col-span-2">
            <div className="text-center">
              <div className="tit text-4xl font-semibold my-4 max-sm:text-lg"><span className='align-sub'>Lezioni individuali</span><span id='price' className='font-thin underline text-green-500 align-super text-3xl max-sm:text-base'>249€</span></div>
              <div className="val font-semibold text-sm max-sm:text-xs">
                Un solo studente per lezione (+ istruttore)
                <div className="my-4 max-sm:my-0"></div>
                Esercizi calibrati su livello individuale
                <div className="my-4 max-sm:my-0"></div>
                Maggiore flessibilita negli orari delle lezioni
                <div className="my-4 max-sm:my-0"></div>
                Consigliato a chi si approccia per la primissima volta al mondo della programmazione
              </div>
            </div>
          </div>

          <hr className='col-span-2 border-0 outline-none bg-gradient-to-r from-transparent via-green-900 to-transparent' style={{ height: "1px" }} />

          <div className="col-span-2 text-center font-semibold text-lg max-sm:text-sm">
            2 lezioni settimanali della durata di 180minuti
            <div className="my-4 max-sm:my-0"></div>
            Lezioni smart sul canale Discord del corso
            <div className="my-4 max-sm:my-0"></div>
            24 ore di lezione + 4 micro-progetti ogni mese
            <div className="my-4 max-sm:my-0"></div>

            <span>Enfasi sull'aspetto pratico dello sviluppo web</span>
            <div className="my-4 max-sm:my-0"></div>

            <span className='underline underline-offset-2 decoration-green-800'>Colloquio introduttivo di 30minuti gratuito</span>
            <div className="my-4 max-sm:my-0 "></div>
          </div>
        </div>

        <span className='text-center text-zinc-100/20 underline underline-offset-2 leading-8 flex flex-col justify-center items-center gap-1 absolute bottom-1 w-9/12'>
          <div className='font-semibold text-lg max-sm:text-sm'>
            Perchè scegliere OJX
          </div>

          <div>
            <svg className='h-5 fill-zinc-100/20 max-sm:h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" /></svg>
          </div>
        </span>
      </article>





      <article className="home diffs relative flex justify-center items-center bg-gradient-to-t from-zinc-950 from-0% to-[#002a52] to-75%" style={{ minHeight: "100vh" }}>
        <div className="wrapper w-10/12 mx-auto h-[70vh] relative rounded-lg drop-shadow-md border px-4 py-4 flex flex-col justify-evenly items-center max-sm:gap-y-3">
          <DiffSec
            color='w'
            tit='mb-8 border border-white py-4'
            texts={[
              "Gli altri corsi online",
              "Unico pagamento di migliaia di euro dopo 1 o 2 anni",
              "Classi di decine di partecipanti e meno attenzione all'individuo",
              "Pesanti penali se decidi di interrompere le lezioni prima di un certo periodo",
              "Diversi tutor per ogni disciplina"
            ]} />


          <DiffSec
            color='g'
            tit='border border-green-200 py-4'
            texts={[
              "Con OJXacademy",
              "Pagamanti contenuti mensili con la possibilità di interrompere o sospendere momentaneamente il servizio quando vuoi",
              "Se dopo il primo mese non sei soddisfatto/a, ti rimborsiamo al 100%",
              "Nessuna durata minima richiesta. Quando senti di aver imparato abbastanza sei incoraggiato a lanciarti nel mondo dello sviluppo professionale!",
              "Un unico tutor qualificato ti seguirà per tutto il tuo percorso",
              "Focus solo sulle tecnologie piu influenti e diffuse sul mercato",
              "Non solo codice: imparerai anche tecniche di design digitale, tasks planning e setup di ambienti di lavoro",
              "Percorsi in base alle tue skill e ai tuoi obbiettivi finali",
              "Facciamo conoscenza prima di iniziare! Prenota il tuo appuntamento virtuale di 30minuti su Google Zoom o Discord per chiederci tutti i dettagli delle lezioni di OJXacademy",

            ]}
          />


        </div>

        <span className='text-center text-blue-400/30 underline underline-offset-2 leading-8 flex flex-col justify-center items-center gap-1 absolute bottom-1 w-9/12'>
          <div className='font-semibold text-lg max-sm:text-sm'>
            Prenota la tua chiamata introduttiva e ottieni il programma completo delle lezioni!
          </div>
          <div>
            <svg className='h-5 fill-blue-400/30 max-sm:h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" /></svg>
          </div>
        </span>
      </article>






      <div id='cont' className="home contacts bg-zinc-950 flex justify-center items-center max-sm:pt-20" style={{ minHeight: "100vh" }}>
        <div className="wrapper w-10/12 mx-auto h-[80vh] relative rounded-lg drop-shadow-md">
          <div className="flex flex-col justify-around items-center w-full mx-auto h-full">

            <div id='sizereact' className='bg-zinc-950 w-full text-center py-5 text-sm max-sm:py-2'>
              Per informazioni: <a className='text-orange-300 font-semibold underline underline-offset-2' href="mailto:info@ojxwebdev.com">info@ojxwebdev.com</a>
            </div>

            <div id='sizereact' className='bg-zinc-950 w-full py-5 text-sm max-sm:py-2 flex justify-evenly'>
              <span>Chat <a className='text-orange-300 font-semibold underline underline-offset-2' target='_blank' href="https://t.me/OJXwebdev">Telegram</a></span>
              <span>Chat <a className='text-orange-300 font-semibold underline underline-offset-2' target='_blank' href="https://discordapp.com/users/6823">Discord</a></span>
            </div>

            <FormMail classes='bg-zinc-950 w-full text-center py-5 text-sm max-sm:py-2' />
          </div>

        </div>
      </div>


    </div>
  )
}
