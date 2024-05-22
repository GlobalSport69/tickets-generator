const handle = async (code: any) => {
    const response = await fetch(`http://localhost:3000/api?code=${code}`, { cache: 'no-store' })
    return await response.json()
}

export default handle