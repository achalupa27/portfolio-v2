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
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-teal-500 dark:text-amber-600">
        Contact
      </h3>
      <h4 className="absolute top-36 text-xs uppercase tracking-[3px] text-teal-500 dark:text-amber-600 md:text-sm">
        Let's Talk.
      </h4>
      <div className="flex flex-col space-y-10">
        {/* <h4 className='text-4xl font-semibold text-center'>
                    <span className='text-teal-500 dark:text-amber-600 mt-2'>Let's talk.</span>
                </h4> */}
        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center space-x-3">
            <PhoneIcon className="h-7 w-7 animate-pulse text-teal-500 dark:text-amber-600" />{" "}
            <p className="text-xl tracking-widest text-teal-500 dark:text-amber-600">
              {pageInfo?.phoneNumber}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-x-3">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-teal-500 dark:text-amber-600" />{" "}
            <p className="text-xl uppercase tracking-widest text-teal-500 dark:text-amber-600">
              {pageInfo?.email}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-x-3">
            <MapPinIcon className="h-7 w-7 animate-pulse text-teal-500 dark:text-amber-600" />
            <div className="flex items-center justify-center space-x-3">
              <p className="text-xl uppercase tracking-widest text-teal-500 dark:text-amber-600">
                {pageInfo?.address}
              </p>
            </div>
            <h4 className="mt-1 text-center text-xs uppercase tracking-[3px] text-teal-500/60 dark:text-amber-600/50 md:text-sm">
              Willing to relocate
            </h4>
          </div>
        </div>
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
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center space-x-3 rounded-sm border border-teal-500 bg-transparent py-4 px-10 text-teal-500 transition duration-300  ease-in-out hover:bg-teal-500 hover:text-sky-50 dark:border-amber-600 dark:text-amber-600 dark:hover:bg-amber-600 dark:hover:text-gray-900"
          >
            <AiOutlineSend className="h-6 w-6" />
            <p className="font-medium uppercase ">Send</p>
          </button>
        </form>

        <div className="flex flex-col items-center justify-center space-y-1 text-center">
          <span className="text-xs uppercase tracking-[3px] text-teal-500/60 dark:text-amber-600/50 md:text-sm">
            portfolio made using
          </span>{" "}
          <Image src="/portfolio_stack.png" width="200" height="40" alt={""} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
