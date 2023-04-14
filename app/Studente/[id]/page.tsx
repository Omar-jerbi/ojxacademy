interface props {
    params: any
}


const fn = async (id: number) => {
    const stud = await fetch("https://ojxacademy.vercel.app/api/Student/FindFromID", {
        method: "POST",
        body: JSON.stringify({ id: id }),
    })
    const x = await stud.json()

    return x
}

export default async function ({ params }: props) {

    // const xx = await fn(params.id)


    return (
        <>
            stud id : {params.id}
        </>
    );
}