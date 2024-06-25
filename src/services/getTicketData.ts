export async function handle(code: any) {
    const res = await fetch(`https://ep443.premierpluss.com/api-v1/tickets/${code}`)
    //console.log(await res.json())
    return await res.json()
}

export default handle