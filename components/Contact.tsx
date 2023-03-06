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
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-800 dark:text-gray-200 text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    <span className='text-gray-800 dark:text-gray-200 mt-2'>Let's talk.</span>
                </h4>
                <div className='space-y-3'>
                    <div className='flex flex-col items-center space-x-3 justify-center'>
                        <PhoneIcon className='text-[#0084ff] h-7 w-7 animate-pulse' /> <p className='text-xl text-gray-800 dark:text-gray-200'>{pageInfo?.phoneNumber}</p>
                    </div>
                    <div className='flex flex-col items-center space-x-3 justify-center'>
                        <EnvelopeIcon className='text-[#0084ff] h-7 w-7 animate-pulse' /> <p className='text-xl text-gray-800 dark:text-gray-200'>{pageInfo?.email}</p>
                    </div>
                    <div className='flex flex-col items-center space-x-3 justify-center'>
                        <MapPinIcon className='text-[#0084ff] h-7 w-7 animate-pulse' />
                        <div className='flex items-center space-x-3 justify-center'>
                            <p className='text-xl text-gray-800 dark:text-gray-200'>{pageInfo?.address}</p>
                        </div>
                        <h4 className='mt-1 text-center uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>Willing to relocate</h4>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contact-input md:w-80' type='text' />
                        <input {...register('email')} placeholder='Email' className='contact-input md:w-80' type='email' />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contact-input md:w-[40]' type='text' />
                    <textarea {...register('message')} placeholder='Message' className='contact-input md:w-[40] h-48'></textarea>
                    <button type='submit' className='bg-[#0084ff] py-4 px-10 rounded-sm text-gray-100 dark:text-gray-900 font-bold hover:bg-[#0069ff] transition duration-300 ease-in-out'>
                        Submit
                    </button>
                </form>

                <div className='flex flex-col items-center justify-center text-center space-y-1'>
                    <span className='uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>portfolio made using</span> <Image src='/portfolio_stack.png' width='200' height='40' alt={''} />
                </div>
            </div>
        </div>
    );
}

export default Contact;
