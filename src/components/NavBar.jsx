import { CircleUser } from "lucide-react";
// import { X } from "lucide-react";
// import  { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  // const [popup,setPopup] = useState(false);

  // const nameref = useRef(null); 
  // const emailref = useRef(null); 
  // const passref = useRef(null); 

  // const handleLogin = (e) => {
  //   e.preventDefault()
  //   console.log(nameref.current.value,emailref.current.value,passref.current.value)
  // }
  return (
    <>
      
      <div className="w-full h-[4rem] grad-blue-bg text-black bg-neutral-300/10 flex justify-center items-center">
        <div className="h-full w-[90%] md:w-[85%] flex justify-between items-center">
          <h1 className="text-lg md:text-3xl text-black h-full flex justify-start items-center">
            PORTFOLIO
          </h1>
          <div className="h-full flex flex-row justify-end items-center gap-4 md:gap-6">
            <ul className="flex flex-row justify-end items-center gap-2 md:gap-4">
              <Link to="/">
                <li className="p-2 md:p-3 text-sm md:text-base outline-none hover:border-black hover:border-b-4 hover:bg-gray-400">
                  Profile
                </li>
              </Link>
              <Link to="/Project">
                <li className="p-2 md:p-3 text-sm md:text-base outline-none hover:border-black hover:border-b-4 hover:bg-gray-400">
                  Project
                </li>
              </Link>
              <Link to="/Contact">
                <li className="p-2 md:p-3 text-sm md:text-base outline-none hover:border-black hover:border-b-4 hover:bg-gray-400">
                  Contact
                </li>
              </Link>
            </ul>
            <CircleUser size={30} className="hidden md:block"/>
          </div>
        </div>
      </div>
      
     {/* <li className="p-3 outline-none hover:border-black hover:border-b-4 hover:bg-gray-400" onClick={()=> setPopup(!popup)}>Login</li> */}
      {/* {
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
      } */}
    </>
  )

}

export default NavBar;