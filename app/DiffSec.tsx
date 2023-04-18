import './DiffSec.scss'

interface props {
    texts: string[],
    color: string,
    tit?: string 
}


export function DiffSec({ texts, color, tit }: props) {
    return <div id='sizereact' className={color + ' diffsec h-2/5 bg-slate-900 flex flex-col w-4/6 px-4 py-4 rounded-md border border-gray-800 overflow-y-auto max-sm:w-full max-sm:h-5/6'}>
        <div className={"text-3xl text-center mb-3 font-bold " + tit} style={{ textShadow: `white 1px 1px 2px;` }}>
            {texts[0]}
        </div>
        {
            texts.map((t: string, k: number) => {
                if (k != 0)
                    return (
                        <div className="mb-3">
                            {t}
                        </div>
                    )
            })
        }
    </div>;
}
