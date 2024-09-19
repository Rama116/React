// import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="fixed">
              <div className="h-screen w-screen flex">
                <h1 className="h-[30%] w-[40%] text-5xl font-serif flex justify-center items-center">Contact Me!</h1>
                <div className="h-[80%] w-[25%] flex flex-col justify-center p-9">
                <form className="flex flex-col gap-5">
                    <input className="px-3 py-2 bg-blue-200 outline-none hover:border-b-4 hover:border-gray-700" type="text" name="txt" id="" placeholder="Name" required/>
                    <input className="px-3 py-2 bg-blue-200 outline-none hover:border-b-4 hover:border-gray-700" type="email" name="mail" id="" placeholder="Email" required/>
                    <textarea className="p-5 bg-blue-200 outline-none hover:border-b-4 hover:border-gray-700" placeholder="Message...">Hello</textarea>
                    <input className="bg-slate-300 p-3 border-4 outline-none hover:border-blue-700 hover:border-b-4 hover:border-gray-700" type="submit" value="Send Message" />
                </form>
                </div>
                
              </div>
        </div>
    </>
  )
}

export default Contact