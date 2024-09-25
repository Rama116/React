import { Github, Instagram, Linkedin } from "lucide-react"
import black from "../assets/img/undraw_server_down_s-4-lk.svg"
import java from "../assets/img/java.webp"
import python from "../assets/img/python.webp"
import react from "../assets/img/react.webp"
import javascript from "../assets/img/javascript.webp"
import django from "../assets/img/django.webp"

// import Footer from "../components/Footer";
const Content = () => {
  return (
    <>

        <div className="h-screen w-full bg-neutral-300/10 flex flex-col md:justify-center md:items-center md:flex-row">
            <div className="h-auto md:h-[35rem] w-full md:w-[60%] flex flex-col justify-center items-center px-4 md:px-0">
                    <h1 className="text-3xl md:text-5xl md:flex md:items-start md:pl-[4.5rem] w-full  font-serif font-light text-black text-center md:text-left">
                    RAMALINGAM M
                    </h1>
                    <p className="mt-6 ml-3 md:mt-10 md:w-auto md:ml-[4.7rem] text-base md:text-lg font-serif text-center md:text-left">
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
        
        <div className="bg-neutral-300/10 w-auto h-[35rem] md:h-[20rem]">
                <div className="flex justify-center items-center text-2xl font-serif w-auto md:text-4xl h-[4rem] md:h-[5rem] w-[50%] md:w-[20%]">
                    <h1>SKILLS</h1>
                </div>

                <div className="md:h-[10rem] flex flex-col md:flex-row justify-around items-center"   >
                    <img className="h-20 md:h-32 transition ease-in-out delay-150 hover:scale-125 " src={java} alt="Java" />
                    <img className="h-16 mt-4 md:h-32 transition ease-in-out delay-150 hover:scale-125" src={python} alt="Python" />
                    <img className="h-20 mt-4 md:h-32 transition ease-in-out delay-150 hover:scale-125" src={react} alt="React" />
                    <img className="h-20 mt-4 md:h-32 transition ease-in-out delay-150 hover:scale-125" src={javascript} alt="Jvascript" />
                    <img className="h-16 mt-4 md:h-32 transition ease-in-out delay-150 hover:scale-125" src={django} alt="Django" />
                </div>
        </div>

        {/* <Footer /> */}
    </>
  )
}

export default Content