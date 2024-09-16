// import React from 'react'

const App = () => {
  return (
    <>
    <div className="flex h-screen w-screen justify-center items-center bg-green-200">

       <div className="h-4/6 w-[33%] flex justify-center items-center bg-slate-100 relative">
         <h1 className="absolute top-[10%] text-black text-2xl font-bold">Login Form</h1>
              
          <form className="h-[70%] w-[70%]  flex flex-col justify-center items-center gap-7">
            <input type="text" name="txt" id="txt" placeholder="Name" className="p-3 w-full outline-none focus:border-b-4 hover:border-green-400"/>
            <input type="email" name="email" id="email" placeholder="abc123@gmail.com" className="p-3 w-full outline-none focus:border-b-4 hover:border-green-400"/>
            <input type="password" name="pass" id="pass" placeholder="Password" className="p-3 w-full outline-none focus:border-b-4 hover:border-green-400"/>
            <button type="submit" className="p-2 text-white bg-green-400 w-[80%] font-bold outline-none focus:border-b-4">submit</button>
          </form>
        </div>
    </div>

        
    </>
  )
}

export default App;
