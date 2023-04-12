interface props {
    params: any
}

export default function ({ params }: props) {


    return (
        <div className="homestudent bg-black" style={{ paddingTop: "150px", minHeight: "100vh" }}>
            <div className="container mx-auto">
                studente
                {params.id}
            </div>
        </div>
    );
}