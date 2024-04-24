import { InstagramIcon, FacebookIcon, YoutubeIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <main className='mt-32 px-3 pt-5  bg-black text-white relative sm:px-10'>
                <h1 className='text-2xl font-bold text-white text-center bg-black absolute -top-6 left-1/2 -translate-x-1/2 py-1 px-3 rounded-lg sm:text-3xl'>
                    COOL KICKS
                </h1>
                <section className='flex flex-col  justify-between mt-8 lg:flex-row'>
                    <div className='flex flex-wrap gap-10 mb-4'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold'>Company</h1>
                            <Link
                                to='/career'
                                className='text-white/70 text-[0.9rem]'
                            >
                                Careers
                            </Link>
                            <Link
                                to='/about'
                                className='text-white/70 text-[0.9rem]'
                            >
                                About us
                            </Link>
                            <Link
                                to='/purpose'
                                className='text-white/70 text-[0.9rem]'
                            >
                                Purpose
                            </Link>
                            <Link
                                to='/news'
                                className='text-white/70 text-[0.9rem]'
                            >
                                News
                            </Link>
                        </div>
                        <div className='flex flex-col gap-4  cursor-default'>
                            <h1 className='font-semibold'>Store Location</h1>
                            <p className='text-white/70 text-[0.9rem]'>
                                Karachi
                            </p>
                            <p className='text-white/70 text-[0.9rem]'>
                                Islamabad
                            </p>
                            <p className='text-white/70 text-[0.9rem]'>
                                Lahore
                            </p>
                        </div>
                        <div>
                            <h1 className='font-semibold mb-3'>Social Media</h1>
                            <p className='flex gap-5'>
                                <Link
                                    to='#'
                                    className='py-2 px-2 rounded-full bg-white/40 text-black'
                                >
                                    <InstagramIcon />
                                </Link>
                                <Link
                                    to='#'
                                    className='py-2 px-2 rounded-full bg-white/40 text-black'
                                >
                                    <FacebookIcon />
                                </Link>
                                <Link
                                    to='#'
                                    className='py-2 px-2 rounded-full bg-white/40 text-black'
                                >
                                    <YoutubeIcon />
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className='w-max'>
                        <h1 className='font-semibold mb-3'>Get In Touch</h1>

                        <form
                            method='post'
                            className='border border-white/50 rounded-md'
                        >
                            <input
                                type='text'
                                placeholder='Your email here'
                                className='bg-transparent border-none py-3 px-3'
                            />
                            <button className='border-l border-l-white/50 px-3 '>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
                <hr className='mt-3' />
                <section className='mt-1 text-center'>
                    <code className='text-sm opacity-80 mb-1'>
                        Built with 💗 by Muhammad Sohail
                    </code>
                </section>
            </main>
        </>
    )
}

export default Footer
