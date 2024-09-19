import { CircleUser } from "lucide-react";
import { X } from "lucide-react";
import  { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [popup,setPopup] = useState(false);

  const nameref = useRef(null); 
  const emailref = useRef(null); 
  const passref = useRef(null); 

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(nameref.current.value,emailref.current.value,passref.current.value)
  }
  return (
    <>
      
      <div className="w-full h-[4rem] grad-blue-bg text-black bg-neutral-300/10 flex justify-center items-center ">
        <div className="h-full w-[85%]  flex justify-center items-center flex-row ">
          <h1 className="text-3xl text-black w-1/3 h-full flex justify-start items-center">PORTFOLIO</h1>
          <div className="w-2/3 h-full flex flex-row justify-end items-center gap-6">
            <ul className="w-full h-full flex flex-row justify-end items-center gap-6">
              <Link to="/"> <li className="p-3 outline-none hover:border-black hover:border-b-4">Profile</li></Link>
              <li className="p-3 outline-none hover:border-black hover:border-b-4">Project</li>
             <Link to="/Contact"><li className="p-3 outline-none hover:border-black hover:border-b-4">Contact</li></Link>
              <li className="p-3 outline-none hover:border-black hover:border-b-4" onClick={()=> setPopup(!popup)}>Login</li>
            </ul>
            <CircleUser size={40}/>
          </div>
        </div>
      </div>
      {
        popup &&
        (
          <>
          <div className="absolute top-0 z-50 w-screen h-screen left-0 flex justify-center items-center bg-black/70 flex-col">
          
          <div className="flex flex-col bg-slate-100 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10rem] border border-[rgba(255,255,255,0.18)] rounded-lg h-1/2 md:w-1/4">

            <div className="flex justify-end w-full px-5 pt-5 " onClick={()=>setPopup(false)}><X color="black"/></div>
            <form className="flex justify-center items-center flex-col gap-5" onSubmit={handleLogin}>
                   <h1 className="text-black font-bold font-sans text-xl">LOGIN</h1>
                   <input ref={nameref} required className="p-2 text-center w-1/2 rounded-sm outline-none border-b-4 hover:border-slate-900" type="text" placeholder="Enter Your Name" />
                   <input ref={emailref} required className="p-2 text-center w-1/2 rounded-sm outline-none border-b-4 hover:border-slate-900" type="email" placeholder="Enter Your Gmail" />
                   <input ref={passref} required className="p-2 text-center w-1/2 rounded-sm outline-none border-b-4 hover:border-slate-900" type="password" placeholder="Enter Your Password" />
                   <input className="bg-slate-900 text-white font-medium px-2 py-2" type="submit" value="Submit" />
            </form>
          </div>

          </div>
          </> 
        )
      }
    </>
  )

}

export default NavBar;