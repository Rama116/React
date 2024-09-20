import { Github, Instagram, Linkedin } from "lucide-react"
import black from "../assets/img/undraw_server_down_s-4-lk.svg"
const Content = () => {
  return (
    <>
        <div className="h-[100vh] w-fixed bg-neutral-300/10 flex">
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
                <div className="w-[50%] h-[10%] flex justify-center gap-4 items-center">
                    <a href="http://"><Instagram size={35} /></a> 
                    <a href="https://github.com/Rama116" target="blank"><Github size={35} /></a>
                    <a href="https://www.linkedin.com/in/ramalingam-m-599955276/" target="blank"><Linkedin size={35} /></a>
                </div>
                
            </div>
                <div className="h-[35rem] w-screen flex justify-center items-center rounded">
                    <img className="h-[50%] w-[40%] border-collapse rounded-3xl" src={black} alt="Luffy-Me" />
                </div>

        </div>

    </>
  )
}

export default Content