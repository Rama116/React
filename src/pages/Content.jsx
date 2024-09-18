import luffy from "../assets/img/greendev.webp"
const Content = () => {
  return (
    <>
    <div className="fixed">
        <div className="h-screen w-screen bg-neutral-300/10 flex">
            <div className="h-[35rem] w-[60%] flex flex-col justify-center items-center">
                <h1 className="text-5xl ml-[2rem] font-serif font-light text-green-500">RAMALINGAM M</h1>
                <p className="ml-28 mt-10 flex justify-start text-lg font-serif">
                Hi i am Ramalingam! A Self-Motivated with a relentless commitment to excellence and an unwavering determination to push boundaries, I am a catalyst for success, leveraging my diverse skill set and boundless creativity to drive impactful change and inspire those around me...
                </p>
            </div>
                <div className="h-[35rem] w-screen flex justify-center items-center rounded">
                    <img className="h-[70%] w-[35%] border-collapse rounded-3xl" src={luffy} alt="Luffy-Me" />
                </div>
        </div>
    </div>
    </>
  )
}

export default Content