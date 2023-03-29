import Image from "next/image";

import ConImage from "../public/assets/contact.jpg";

export default function Contact() {
  return (
    <>
      <div className="flex w-full min-h-screen justify-center items-center bg-slate-200">
  <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-indigo-500 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
    <div className="flex flex-col space-y-8 justify-between">
      <div>
        <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
        <p className="pt-2 text-indigo-100 text-sm">For all your need, PsiKnowLogix family is here to help, do not hesitate to contact us!</p>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="inline-flex space-x-2 items-center w-60">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>+91 (704) 238 1607</span>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span>abhishek@psiknowlogix.com</span>
        </div>
        <div className="inline-flex space-x-2 items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>Address Needed</span>
        </div>
      </div>      
      <div className="flex space-x-4">
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
        </a>
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>
    </div>
    <div className="relative">
      <div className="absolute z-0 w-40 h-40 bg-blue-400 rounded-full -right-28 -top-28"></div>
      <div className="absolute z-0 w-40 h-40 bg-blue-400 rounded-full -left-28 -bottom-16"></div>
      <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
        <form className="flex flex-col space-y-4" action="">
          <div>
            <label  className="text-sm">Name</label>
            <input type="text" 
                   placeholder="Name" 
                   className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300"/>
          </div>
          <div>
            <label  className="text-sm">Email</label>
            <input type="email" 
                   placeholder="Email" 
                   className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300"/>
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea placeholder="Message"
                 
                   className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300"></textarea>
          </div>
          <button className="inline-block self-end bg-blue-600 font-bold rounded-lg px-6 py-4 uppercase text-sm text-white">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
