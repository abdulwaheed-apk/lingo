import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Duolingo - The world's best way to learn a language",
    description: 'The free, fun, and effective way to learn a language!',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={font.className}>{children}</body>
            </html>
        </ClerkProvider>
    )
}
