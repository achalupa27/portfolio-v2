import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../types";
import Image from "next/image";
import { AiOutlineSend } from "react-icons/ai";

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
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly  px-10 text-center md:flex-row md:text-left">
      <div className="flex flex-col space-y-10">
        {/* <h4 className='text-4xl font-semibold text-center'>
                    <span className='text-teal-500 dark:text-amber-600 mt-2'>Let's talk.</span>
                </h4> */}
        <div className="space-y-4"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-[450px] flex-col space-y-2 md:w-[550px] lg:w-fit"
        >
          <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contact-input"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contact-input"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contact-input lg:w-auto"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contact-input h-48 resize-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center space-x-3 rounded-sm border border-teal-500 bg-transparent py-4 px-10 text-teal-500 transition duration-300  ease-in-out hover:bg-teal-500 hover:text-sky-50 dark:border-amber-600 dark:text-amber-600 dark:hover:bg-amber-600 dark:hover:text-gray-900"
          >
            <AiOutlineSend className="h-6 w-6" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
