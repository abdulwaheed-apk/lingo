'use client'
import Image from 'next/image'
import logo from '@/public/duolingo-logo.svg'
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
export const Header = () => {
    return (
        <header className='h-20 w-full border-b-2 border-slate-200 px-4'>
            <div className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
                <div className='py-8 pl-4 gap-x-3'>
                    <Image src={logo} alt='Duolingo logo' height={40} />
                </div>
                <ClerkLoading>
                    <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton afterSignOutUrl='/' />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton
                            mode='modal'
                            signUpForceRedirectUrl={'/learn'}
                            forceRedirectUrl={'/learn'}
                        >
                            <Button variant={'ghost'} size={'lg'}>
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    )
}
