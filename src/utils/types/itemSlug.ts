export interface ItemSlug {
    objects: [
        {
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
                    button_active: boolean
                    button_title: string
                    button_link: string
                }

            }
        }

    ]
}

