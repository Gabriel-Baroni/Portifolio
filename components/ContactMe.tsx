import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
  name:string;
  email:string;
  subject:string;
  message:string;

}
type Props = {}


function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(`Hi, my name is ${formData.name}. ${formData.message}`);
    window.location.href = `mailto:gdepaulabaroni@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-3  ">
        <h4 className="text-2xl font-semibold text-center">
            I have got just what you need.{" "}
            <span className="underline decoration-[#4169E1]/50"> Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#4169E1] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">+55 12-996081004</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#4169E1] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">gdepaulabaroni@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="text-[#4169E1] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">Coding</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
                <input {...register("name")} placeholder="Name" className="contactInput" type="text"/>
                <input {...register("email")} placeholder="Email" className="contactInput" type="email"/>
            </div>

            <input {...register("subject")} placeholder="Subject" className="contactInput" type="text"/>

            <textarea {...register("message")} placeholder="Message" className="contactInput"/>
            <button
             type="submit"
             className="bg-[#4169E1] py-5 px-10 rounded-md text-black font-bold 
            text-lg">
              Submit
            </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe