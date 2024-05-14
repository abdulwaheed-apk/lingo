import Image from 'next/image'
import landingImg from '@/public/landing-1.svg'
import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Home = () => {
    return (
        <div className='max-w-[988px] mx-auto flex-1 flex flex-col lg:flex-row justify-center items-center p-4 gap-2'>
            <div className='relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0'>
                <Image src={landingImg} alt='Landing Image' fill />
            </div>
            <div className='flex flex-col items-center gap-y-8'>
                <h1 className='text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center'>
                    The free, fun, and effective way to learn a language!
                </h1>
                <div>
                    <ClerkLoading>
                        <Loader className='w-5 h-5 text-muted-foreground animate-spin' />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignedOut>
                            <SignUpButton
                                mode='modal'
                                signInFallbackRedirectUrl={'/learn'}
                                fallbackRedirectUrl={'learn'}
                            >
                                <Button
                                    variant={'secondary'}
                                    size={'lg'}
                                    className='w-full'
                                >
                                    Get started
                                </Button>
                            </SignUpButton>
                            <SignInButton
                                mode='modal'
                                fallbackRedirectUrl={'learn'}
                                signUpFallbackRedirectUrl={'learn'}
                                // afterSignInUrl={'/learn'}
                            >
                                <Button
                                    variant={'primaryOutline'}
                                    size={'lg'}
                                    className='w-full'
                                >
                                    I already have an account
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <Button
                                size={'lg'}
                                variant={'secondary'}
                                className='w-full'
                                asChild
                            >
                                <Link href={'/learn'}>Continue Learning</Link>
                            </Button>
                        </SignedIn>
                    </ClerkLoaded>
                </div>
            </div>
        </div>
    )
}
export default Home
