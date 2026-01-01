import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
    console.log("DB URL:", process.env.DATABASE_URL)
    return new PrismaClient({
        datasources: {
            db: {
                url: process.env.DATABASE_URL,
            },
        },
    })
}

const globalForPrisma = globalThis

const db = globalForPrisma.prisma || prismaClientSingleton()

export default db

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db
