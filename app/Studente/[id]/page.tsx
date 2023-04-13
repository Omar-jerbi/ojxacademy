interface props {
    params: any
}

export default function ({ params }: props) {


    return (
        <>
            stud id : {params.id}
        </>
    );
}