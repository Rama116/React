import { CircleUser } from "lucide-react";

const NavBar = () => {
  return (
    <>
      
      <div className="w-full h-[4rem] grad-blue-bg text-black bg-purple-400 flex justify-center items-center ">
        <div className="h-full w-[80%]  flex justify-center items-center flex-row ">
          <h1 className="text-3xl text-black w-1/3 h-full flex justify-start items-center">Ramalingam M</h1>
          <div className="w-2/3 h-full flex flex-row justify-end items-center gap-6">
            <ul className="w-full h-full flex flex-row justify-end items-center gap-6">
              <li className="hover:bg-purple-300 px-2 py-2 border rounded border-transparent">Profile</li>
              <li className="hover:bg-purple-300 px-2 py-2 border rounded border-transparent">Project</li>
              <li className="hover:bg-purple-300 px-2 py-2 border rounded border-transparent">Contact</li>
            </ul>
            <CircleUser size={40}/>
          </div>
        </div>
      </div>
    </>
  )

}

export default NavBar;