import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../types';
import Image from 'next/image';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {
    pageInfo: PageInfo;
};

function Contact({ pageInfo }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:${formData.email}?subject=${formData.subject}?&body=Hi, my name is ${formData.name}. ${formData.message}`;
    };

    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl  px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-teal-500 dark:text-amber-600 text-2xl'>Contact</h3>
            <h4 className='absolute top-36 uppercase tracking-[3px] text-teal-500 dark:text-amber-600 text-xs md:text-sm'>Let's Talk.</h4>
            <div className='flex flex-col space-y-10'>
                {/* <h4 className='text-4xl font-semibold text-center'>
                    <span className='text-teal-500 dark:text-amber-600 mt-2'>Let's talk.</span>
                </h4> */}
                <div className='space-y-4'>
                    <div className='flex flex-col items-center space-x-3 justify-center'>
                        <PhoneIcon className='text-teal-500 dark:text-amber-600 h-7 w-7 animate-pulse' /> <p className='text-xl text-teal-500 dark:text-amber-600 tracking-widest'>{pageInfo?.phoneNumber}</p>
                    </div>
                    <div className='flex flex-col items-center space-x-3 justify-center'>
                        <EnvelopeIcon className='text-teal-500 dark:text-amber-600 h-7 w-7 animate-pulse' /> <p className='text-xl text-teal-500 dark:text-amber-600 uppercase tracking-widest'>{pageInfo?.email}</p>
                    </div>
                    <div className='flex flex-col items-center space-x-3 justify-center'>
                        <MapPinIcon className='text-teal-500 dark:text-amber-600 h-7 w-7 animate-pulse' />
                        <div className='flex items-center space-x-3 justify-center'>
                            <p className='text-xl text-teal-500 dark:text-amber-600 uppercase tracking-widest'>{pageInfo?.address}</p>
                        </div>
                        <h4 className='mt-1 text-center uppercase tracking-[3px] text-teal-500/60 dark:text-amber-600/50 text-xs md:text-sm'>Willing to relocate</h4>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-[450px] md:w-[550px] lg:w-fit mx-auto'>
                    <div className='flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0'>
                        <input {...register('name')} placeholder='Name' className='contact-input' type='text' />
                        <input {...register('email')} placeholder='Email' className='contact-input' type='email' />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contact-input lg:w-auto' type='text' />
                    <textarea {...register('message')} placeholder='Message' className='contact-input h-48 resize-none'></textarea>
                    <button type='submit' className='bg-transparent py-4 px-10 border border-teal-500 dark:border-amber-600 rounded-sm text-teal-500 dark:text-amber-600 font-bold hover:bg-teal-500 hover:text-sky-50 dark:hover:bg-amber-600 dark:hover:text-gray-900 transition duration-300 ease-in-out'>
                        Submit
                    </button>
                </form>

                <div className='flex flex-col items-center justify-center text-center space-y-1'>
                    <span className='uppercase tracking-[3px] text-teal-500/60 dark:text-amber-600/50 text-xs md:text-sm'>portfolio made using</span> <Image src='/portfolio_stack.png' width='200' height='40' alt={''} />
                </div>
            </div>
        </div>
    );
}

export default Contact;
