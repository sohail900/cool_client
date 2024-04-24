import { Loader2 } from 'lucide-react'
const Loading = () => {
    return (
        <>
            <section className='h-[100dvh] grid place-items-center'>
                <Loader2 size={35} className='animate-spin' />
            </section>
        </>
    )
}

export default Loading
