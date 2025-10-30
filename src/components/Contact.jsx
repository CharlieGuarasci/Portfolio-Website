import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col -mt-10 mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/pagxnrqb"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border border-gray-400 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border border-gray-400 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border border-gray-400 rounded-md focus:outline-none"
               />
               <button
                  type="submit"
                  className="text-center inline-block px-4 py-1.5
                  w-max text-base font-extralight rounded-md
                   text-black border border-gray-400 dark:text-white hover:bg-slate-50"
               >
                  Contact
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;