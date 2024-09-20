// import React from 'react'
import dev from "../assets/img/undraw_Contact_us_re_4qqt.png"
const Contact = () => {
  return (
    <>
        {/* <div className="fixed"> */}
              <div className="h-screen w-[fixed] flex">
                <div className="h-[70%] w-[40%] text-5xl font-serif flex flex-col justify-center items-center gap-8">
                  <h1 className="text-5xl font-serif flex justify-center items-center">Contact Me!</h1>
                  <img className="w-[75%]" src={dev} alt="Luffy GOAT" />
                </div>
                
                <div className="h-[80%] w-[25%] flex flex-col justify-center p-9">
                <form className="flex flex-col gap-5">
                    <input className="px-3 py-2 bg-gray-800 text-white outline-none hover:border-b-4 hover:border-yellow-400" type="text" name="txt" id="" placeholder="Name" required/>
                    <input className="px-3 py-2 bg-gray-800 text-white outline-none hover:border-b-4 hover:border-yellow-400" type="email" name="mail" id="" placeholder="Email" required/>
                    <textarea className="p-5 bg-gray-800 text-white outline-none hover:border-b-4 hover:border-yellow-400" placeholder="Message..."></textarea>
                    <input className="bg-slate-300 p-3 border-4 outline-none hover:border-blue-700 hover:border-b-4 hover:border-gray-700" type="submit" value="Send Message" />
                </form>
                </div>
                
              </div>
        {/* </div> */}
    </>
  )
}

export default Contact