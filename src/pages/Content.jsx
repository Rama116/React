import { Github, Instagram, Linkedin } from "lucide-react"
import black from "../assets/img/undraw_server_down_s-4-lk.svg"
const Content = () => {
  return (
    <>

        <div className="h-screen w-full bg-neutral-300/10 flex flex-col md:flex-row">
            <div className="h-auto md:h-[35rem] w-full md:w-[60%] flex flex-col justify-center items-center px-4 md:px-0">
                    <h1 className="text-3xl md:text-5xl font-serif font-light text-black text-center md:text-left">
                    RAMALINGAM M
                    </h1>
                    <p className="mt-6 md:mt-10 text-base md:text-lg font-serif text-center md:text-left">
                    I am a motivated degree college student pursuing with a strong interest in IT.
                    I have developed foundational skills in programming, project management, etc.
                    through coursework and hands-on projects. Eager to gain practical experience and
                    contribute to innovative solutions, I am looking for opportunities to apply my
                    knowledge and grow professionally. Known for my problem-solving abilities,
                    teamwork, or leadership, I aim to build a successful career as a Developer.
                    </p>
                <div className="w-full md:w-[50%] h-auto mt-4 md:mt-6 flex justify-center md:justify-start gap-4 items-center">
                    <a href="http://"><Instagram size={30} /></a>
                    <a href="https://github.com/Rama116" target="_blank"><Github size={30} /></a>
                    <a href="https://www.linkedin.com/in/ramalingam-m-599955276/" target="_blank"><Linkedin size={30} /></a>
                </div>
            </div>
            <div className="h-auto md:h-[35rem] w-full md:w-[40%] flex justify-center items-center mt-8 md:mt-0">
                <img className="h-[60%] md:h-[50%] w-[80%] md:w-[40%] border-collapse rounded-3xl" src={black} alt="Luffy-Me" />
            </div>
        </div>


    </>
  )
}

export default Content