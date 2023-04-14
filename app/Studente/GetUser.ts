export const getUser = async (params: any) => {
    const u = await fetch(process.env.API_URL + "api/Student/FindFromToken", {
        method: "POST",
        body: JSON.stringify({ id: Number(params.id_sid_secret.split('_')[0]), sid: Number(params.id_sid_secret.split('_')[1]), secret: Number(params.id_sid_secret.split('_')[2]) }),
        cache: "no-cache"
    })
    const x = await u.json()
    return x
}