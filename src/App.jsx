// import React from 'react'

const App = () => {
  return (
    <>
    <div className="flex h-screen w-screen justify-center items-center bg-green-200">

       <div className="h-4/6 w-[30%] flex justify-center items-center bg-green-100 relative">
         <h1 className="absolute top-[5%] text-black text-2xl font-bold underline">Login Form</h1>
              
          <form className="h-[70%] w-[70%]  flex flex-col justify-center items-center gap-7">
            <input type="text" name="txt" id="txt" placeholder="Name" className="p-3 w-full outline-none focus:border-b-4 hover:border-green-400"/>
            <input type="email" name="email" id="email" placeholder="abc123@gmail.com" className="p-3 w-full outline-none focus:border-b-4 hover:border-green-400"/>
            <input type="password" name="pass" id="pass" placeholder="Password" className="p-3 w-full outline-none focus:border-b-4 hover:border-green-400"/>
            <a href="" target="blank" className="font-medium flex text-base pl-48 outline:none hover:underline text-blue-500"><p>Forgot Password?</p></a>
            <button type="submit" className="p-3 text-white bg-green-400 w-[75%] font-bold outline-none hover:bg-green-500">submit</button>
          </form>
        </div>
    </div>

        
    </>
  )
} 

export default App;
