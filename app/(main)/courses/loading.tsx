import { Loader } from 'lucide-react'

const Loading = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <Loader className='w-5 h-5 text-muted-foreground animate-spin' />
        </div>
    )
}

export default Loading
