export const getLessonsOfStud = async (params: any) => {
    const s = await fetch(process.env.API_URL + "api/Lessons/AllOfStud", {
        method: "POST",
        body: JSON.stringify({ sid: Number(params.id_sid_secret.split('_')[1]) }),
        cache: "no-cache"
    })
    const x = await s.json()
    return x
}

export const getLessonsOfGroup = async (gid: any) => {
    const s = await fetch(process.env.API_URL + "api/Lessons/AllOfGroup", {
        method: "POST",
        body: JSON.stringify({ gid: gid }),
        cache: "no-cache"
    })
    const x = await s.json()
    return x
}