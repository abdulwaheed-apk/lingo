import { Button } from '@/components/ui/button'
import Image from 'next/image'
import es from '@/public/es.svg'

export const Footer = () => {
    return (
        <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
            <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
                <Button variant={'ghost'} size={'lg'} className='w-full'>
                    <Image
                        alt='Spanish'
                        src={es}
                        width={40}
                        height={32}
                        className='rounded-md mr-4'
                    />
                    Spanish
                </Button>
            </div>
        </footer>
    )
}
