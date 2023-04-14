interface props {
    params: any
}


const fn = async (id: number) => {
    const stud = await fetch(process.env.API_URL + "api/Student/FindFromID", {
        method: "POST",
        body: JSON.stringify({ id: id }),
    })
    const x = await stud.json()

    return x
}

export default async function ({ params }: props) {

    const xx = await fn(params.id)


    return (
        <>
            {xx.name}
            {xx.familyname}

        </>
    );
}