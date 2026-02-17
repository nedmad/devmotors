import { redirect } from "next/navigation"


export async function getHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/69531e076d538c4d2c7131db?pretty=true&read_key=${process.env.NEXT_KEY}&depth=1&props=slug,title,metadata,type`)
        if (!res.ok) {
            return console.log("Nada requisitado")
        }
        return res.json()
    } catch (err) {
        throw new Error("Erro ao requisitar")
    }
}

export async function getSubmenu() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.NEXT_KEY}&depth=1&props=slug,title,`, {
            cache: "no-store"
        })
        if (!res.ok) {
            return console.log("Nada requisitado")
        }
        return res.json()
    } catch (err) {
        throw new Error("Erro ao requisitar")
    }
}

export default async function getItemBySlug(slug: string) {
    const domainUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: slug
        }),
        props: "slug,title,content,metadata",
        read_key: process.env.NEXT_KEY as string
    })

    const url = `${domainUrl}?${queryParams}`
    try {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error("Teste de erro");
            redirect("/")


        }
        return res.json()
    } catch (err) {
        redirect("/")

    }
}