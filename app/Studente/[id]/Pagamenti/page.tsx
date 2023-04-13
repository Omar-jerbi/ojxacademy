interface props {
    params: any//.id
}

export default function ({ params }: props) {
    return (
        <div className="bg-black min-h-[100vh]">
            sezione pagamenti
            {params.id}
        </div>
    );
}