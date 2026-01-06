export interface HomeCms {
    object: {
        slug: string
        title: string
        type: string
        metadata: {
            banner: {
                url: string

            }
            heading: string
            button: {
                title: string
                link: string
            }
            info: {
                title: string
                descricao: string
                image: {
                    url: string
                }
            }
            servicos: ServicosCms[]
            contato: {
                email: string
                phone: string
                addres: string
                horario: string
            }
        }

    }
}

interface ServicosCms {
    image: {
        url: string
    }
    descricao: string
}