import 'dotenv/config'
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import * as schema from '@/db/schema'

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
    try {
        console.log('Seeding start')
        await db.delete(schema.courses)
        await db.delete(schema.userProgress)

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: 'Spanish',
                imgSrc: '/es.svg',
            },
            {
                id: 2,
                title: 'Turkish',
                imgSrc: '/tr.svg',
            },
            {
                id: 3,
                title: 'Italian',
                imgSrc: '/it.svg',
            },
            {
                id: 4,
                title: 'Portuguese',
                imgSrc: '/pt.svg',
            },
            {
                id: 5,
                title: 'Japanese',
                imgSrc: '/jp.svg',
            },

            {
                id: 6,
                title: 'French',
                imgSrc: '/fr.svg',
            },
            {
                id: 7,
                title: 'Croatian',
                imgSrc: '/hr.svg',
            },
            {
                id: 8,
                title: 'English',
                imgSrc: '/en.svg',
            },
        ])
        console.log('Seeding finished')
    } catch (error) {
        console.error(error)
        throw new Error('Failled to seed database')
    }
}

main()
