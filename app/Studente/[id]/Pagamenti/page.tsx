interface props {
    params: any//.id
}

export default function ({ params }: props) {
    return (
        <div>
            sezione pagamenti
            {params.id}
        </div>
    );
}