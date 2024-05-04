import { PhoneCallIcon, MailIcon } from 'lucide-react'
import ContactInputForm from '../components/ContactUs/ContactInputForm'
const ContactUs = () => {
    return (
        <section className='w-[100vw] h-auto flex justify-center flex-col px-[2rem] md:px-[3.5rem]'>
            <h1 className='conatiner_name mb-8 mt-24'>CONTACT US</h1>
            <div className='w-full h-auto flex flex-col  justify-around items-center gap-3 md:flex-row '>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h2 className='flex items-center gap-2  text-[1.35rem] font-semibold text-text_color mb-1 '>
                            <PhoneCallIcon /> Call Us
                        </h2>
                        <p className='text-[1.1rem] font-semibold text-text_color2'>
                            +12 345678910
                        </p>
                    </div>
                    <div>
                        <h2 className='flex items-center gap-2   text-[1.35rem] font-semibold text-text_color mb-2'>
                            <MailIcon /> Email Address
                        </h2>
                        <p className='text-[1.1rem] font-semibold text-text_color2'>
                            helpcoolkick@gmail.com
                        </p>
                    </div>
                </div>
                <span className='gap_line'></span>
                <ContactInputForm />
            </div>
        </section>
    )
}

export default ContactUs
