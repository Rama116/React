import { useRef } from 'react';
import emailjs from 'emailjs-com';
import dev from "../assets/img/undraw_Contact_us_re_4qqt.png";
// import Footer from "../components/Footer";
import { toast } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2gihzs9',  
      'template_qe2nm3a',
      form.current,
      'fUwfh1p86pEXuuJlB'       
    )
    .then((result) => {
        console.log(result.text);
        // toast.success('Message sent successfully!');
        toast('Message Sent Successfully!',
          {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
    }, (error) => {
        console.log(error.text);
        toast.error('Failed to send the message.');
    });

    e.target.reset(); 
  };

  return (
    <>
      
      <div className="h-screen w-full flex flex-col md:flex-row">
        <div className="h-[50%] md:ml-[4rem] md:h-[80%] w-full md:w-[40%] text-3xl md:text-5xl font-serif flex flex-col justify-center items-center gap-4 md:gap-8">
          <h1 className="text-4xl md:text-5xl font-serif flex justify-center items-center">Contact Me!</h1>
          <img className="w-[60%] md:w-[75%]" src={dev} alt="Contact Image" />
        </div>

        <div className="h-auto md:ml-[15%] md:h-[80%] w-[75%] ml-[2.8rem] md:w-[25%] flex flex-col justify-center p-6 md:p-9">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 md:gap-5">
            <input className="px-3 py-2 bg-gray-800 text-white outline-none hover:border-b-4 hover:border-blue-400" type="text" name="from_name" placeholder="Name" required
 />
            <input className="px-3 py-2 bg-gray-800 text-white outline-none hover:border-b-4 hover:border-blue-400" type="email" name="from_email" placeholder="Email" required
 />
            <textarea className="p-3 md:p-5 bg-gray-800 text-white outline-none hover:border-b-4 hover:border-blue-400" name="message" placeholder="Message..." required
 />
            <input className="bg-slate-300 p-2 md:p-3 border-4 outline-none hover:border-blue-700 hover:border-b-4 hover:border-gray-700" type="submit" value="Send Message"
 />
          </form>
        </div>
      </div>

    </>
  );
};

export default Contact;
