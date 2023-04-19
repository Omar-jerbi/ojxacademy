import './DiffSec.scss'

interface props {
    texts: string[],
    color: string,
    tit?: string
}


export function DiffSec({ texts, color, tit }: props) {
    return <div id='sizereact' className={'diffsec h-2/5 bg-slate-900 flex flex-col w-4/6 px-4 py-4 rounded-md border border-gray-800 overflow-y-auto max-sm:w-full max-sm:h-5/6'}>
        <div className={(color == 'w' ? "text-white" : "text-green-300") + " text-3xl text-center mb-3 font-bold tracking-wider " + tit} style={{ textShadow: `white 1px 1px 2px` }}>
            {texts[0]}
        </div>
        {
            texts.map((t: string, k: number) => {
                if (k != 0)
                    return (
                        <div key={k} className={(color == 'w' ? "text-white" : "text-green-300") + " flex flex-col items-center text-center"}>
                            {t}
                            <hr className={`border-0 outline-none w-1/12 min-w-[60px] my-2 bg-gradient-to-r from-transparent via-${color} to-transparent`} style={{ height: "1px" }} />
                        </div>
                    )
            })
        }
    </div>;
}
