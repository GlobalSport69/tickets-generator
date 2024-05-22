// const handle = async (code: any) => {
//     const response = await fetch(`http://localhost:3000/api?code=${code}`, { cache: 'no-store' })
//     return await response.json()
// }

// export default handle
//import { NextRequest } from "next/server"

export async function handle(code: any) {
    const res = await fetch(`https://ep443.premierpluss.com/api-v1/tickets/${code}`)
    //console.log(await res.json())
    return await res.json()
}

export default handle