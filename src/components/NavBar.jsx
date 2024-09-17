
const NavBar = () => {
    return(
        <>
                <div className="w-full h-[4.3rem] grad-blue-bg text-black bg-purple-400 flex relative">
                  <h1 className="text-3xl text-black absolute left-[6%] top-[20%]">Ramalingam M</h1>
                  <ul className="flex flex-row  gap-10 text-xl absolute right-[10%] top-[32%]">
                      <li>Profile</li>
                      <li>Project</li>
                      <li>Contact</li>
                  </ul>  

                </div>
         </>
    )

}

export default NavBar;