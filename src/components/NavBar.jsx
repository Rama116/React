import { CircleUser } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [popup,setPopup] = useState(false);
  return (
    <>
      
      <div className="w-full h-[4rem] grad-blue-bg text-black bg-green-500 flex justify-center items-center ">
        <div className="h-full w-[85%]  flex justify-center items-center flex-row ">
          <h1 className="text-3xl text-black w-1/3 h-full flex justify-start items-center">Ramalingam M</h1>
          <div className="w-2/3 h-full flex flex-row justify-end items-center gap-6">
            <ul className="w-full h-full flex flex-row justify-end items-center gap-6">
              <li className="hover:bg-green-300 px-2 py-2 border rounded border-transparent">Profile</li>
              <li className="hover:bg-green-300 px-2 py-2 border rounded border-transparent">Project</li>
              <li className="hover:bg-green-300 px-2 py-2 border rounded border-transparent">Contact</li>
              <li className="hover:bg-green-300 px-2 py-2 border rounded border-transparent" onClick={()=> setPopup(!popup)}>Login</li>
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
          
          <div className="flex flex-col bg-[rgba(12,221,45,0.25)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10rem] border border-[rgba(255,255,255,0.18)] rounded-lg h-1/2 w-1/4">

            <div className="flex justify-end w-full px-5 pt-5 "><X/></div>
            <div className="flex justify-center items-center flex-col gap-5 pt-8">
                   <h1 className="text-red-600 text-xl">LOGIN</h1>
                   <input className="p-3" type="text" placeholder="enter a name" />
                   <input className="p-3" type="password" placeholder="enter your password" />
                   <input className="bg-red-300 px-2 py-2" type="submit" value="submit" />
            </div>
          </div>
         
          </div>
          </> 
        )
      }
    </>
  )

}

export default NavBar;