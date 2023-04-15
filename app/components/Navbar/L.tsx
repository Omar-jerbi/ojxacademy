import Link from 'next/link'


interface props {
    route: string,
    userid: any,
    tit: string
}

export function L({ route, userid, tit }: props) {
    return <Link
        className='max-sm:text-sm border-b border-transparent hover:border-white'
        href={`/Studente/${userid}${route}`}>
        {tit}
    </Link>;
}
