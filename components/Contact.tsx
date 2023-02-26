import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../types';

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
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    Have an idea? <span className='decoration-[#0084ff] underline'>Message me.</span>
                </h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#0084ff] h-7 w-7 animate-pulse' /> <p className='text-2xl'>{pageInfo?.phoneNumber}</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#0084ff] h-7 w-7 animate-pulse' /> <p className='text-2xl'>{pageInfo?.email}</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#0084ff] h-7 w-7 animate-pulse' /> <p className='text-2xl'>{pageInfo?.address}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contact-input' type='text' />
                        <input {...register('email')} placeholder='Email' className='contact-input' type='email' />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contact-input' type='text' />
                    <textarea {...register('message')} placeholder='Message' className='contact-input'></textarea>
                    <button type='submit' className='bg-[#0084ff] py-5 px-10 rounded-md text-black font-bold'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
