import { prisma } from '../prisma/PrismaClient'

export interface PostImageData {
    id: string
    name: string
    size: number
    key: string
    url: string
    createdAt?: Date | string
}

export async function uploadImage({
    id,
    name,
    size,
    key,
    url,
    createdAt,
}: PostImageData) {
    {
        const image = await prisma.imageCreate.create({
            data: {
                id,
                name,
                size,
                key,
                url,
                createdAt,
            },
        })
        console.log(image)
    }

    return uploadImage
}
