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
        await db.delete(schema.units)
        await db.delete(schema.lessons)
        await db.delete(schema.challenges)
        await db.delete(schema.challengeOptions)
        await db.delete(schema.challengeProgress)

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

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1, //Spanish
                title: 'Unit 1',
                description: 'Learn the basics of Spanish',
                order: 1,
            },
        ])

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1, // Unit 1--Learn the basics of Spanish
                title: 'Nouns',
                order: 1,
            },

        ])

        await db.insert(schema.challenges).values([{
            id: 1,
            lessonId: 1,// Nouns
            type: 'SELECT',
            order: 1,
            question: 'Which one of these is "the man"?'
        }])

await  db.insert(schema.challengeOptions).values([
    {   id: 1,
        challengeId: 1, // 'Which one of these is "the man"?'
        correct: true,
        imageSrc: 'man.svg',
        audioSrc: 'es_man.mp3',
        text: 'El hombre'
    },
    {id: 2,
        challengeId: 1, // 'Which one of these is "the man"?'
        correct: false,
        imageSrc: 'woman.svg',
        audioSrc: 'es_woman.mp3',
        text: 'La mujer'}
    ,
    {
        id: 3,
        challengeId: 1, // 'Which one of these is "the man"?'
        correct: false,
        imageSrc: 'child.svg',
        audioSrc: 'es_child.mp3',
        text: 'El chico'
    }
])
        console.log('Seeding finished')
    } catch (error) {
        console.error(error)
        throw new Error('Failled to seed database')
    }
}

main()
