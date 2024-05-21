import { Button } from '@/components/ui/button'
import Image from 'next/image'
import es from '@/public/es.svg'
import fr from '@/public/fr.svg'
import de from '@/public/de.svg'
import tr from '@/public/tr.svg'
import hr from '@/public/hr.svg'
import pt from '@/public/pt.svg'
import hindi from '@/public/in.svg'
import it from '@/public/it.svg'

const flags = [
    { country: 'Spanish', src: es },
    { country: 'French', src: fr },
    { country: 'German', src: de },
    { country: 'Turkish', src: tr },
    { country: 'Italian ', src: it },
    { country: 'Portuguese', src: pt },
    { country: 'Hindi', src: hindi },
]

export const Footer = () => {
    return (
        <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
            <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
                {flags.map((flag, index) => (
                    <Button
                        key={index}
                        variant={'ghost'}
                        size={'lg'}
                        className='w-full'
                    >
                        <Image
                            alt={flag.country}
                            src={flag.src}
                            width={40}
                            height={32}
                            className='rounded-md mr-4'
                        />
                        {flag.country}
                    </Button>
                ))}
            </div>
        </footer>
    )
}
