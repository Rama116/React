
const NavBar = ({appname}) => {
    return(
        <>
                <div className="w-full h-[3.5rem] grad-blue-bg text-black bg-green-400 flex justify-center">
                  {/* <h1> {appname}</h1>  */}
                  <div className="h-[100%] w-96 bg-slate-50">
                    <ul className="flex flex-row gap-12 text-black font-bold text-lg pt-3 justify-center">
                      <li >Home</li>
                      <li>Login</li>
                      <li>Cart</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
         </>
    )

}

export default NavBar;