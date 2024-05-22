import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = new URLSearchParams(request.nextUrl.searchParams)
    const code = searchParams.get('code')
    const res = await fetch(`https://ep443.premierpluss.com/api-v1/tickets/${code}`)
    return Response.json(await res.json())
}