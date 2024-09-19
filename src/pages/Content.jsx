import black from "../assets/img/black.gif"
const Content = () => {
  return (
    <>
    <div className="fixed">
        <div className="h-screen w-screen bg-neutral-300/10 flex">
            <div className="h-[35rem] w-[60%] flex flex-col justify-center items-center">
                <h1 className="text-5xl ml-[2rem] font-serif font-light text-black">RAMALINGAM M</h1>
                <p className="ml-28 mt-10 flex justify-start text-lg font-serif">
                I am a motivated degree college student pursuing with a strong interest in IT .
                I have developed foundational skills in programming, project management,
                etc. through coursework and hands-on projects. Eager to gain practical
                experience and contribute to innovative solutions, I am looking for
                opportunities to apply my knowledge and grow professionally. Known for my
                problem-solving abilities, teamwork, or leadership. I aim to build a successful
                career in Developer. 
                </p>
            </div>
                <div className="h-[35rem] w-screen flex justify-center items-center rounded">
                    <img className="h-[50%] w-[40%] border-collapse rounded-3xl" src={black} alt="Luffy-Me" />
                </div>
        </div>
    </div>
    </>
  )
}

export default Content