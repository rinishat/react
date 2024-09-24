import Navbar from "../Component/NavBar";
import contactx from "../assets/img/contact.jpeg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="antialiased bg-pink-200">
        <div className="flex w-full min-h-[calc(100vh-4rem)] h-[10%] justify-center items-center">
          <div className="flex flex-col space-y-6 bg-[#881517ef] w-full max-w-xl p-8 rounded-xl shadow-lg text-white">
            <div>
              <h1 className="mb-5 font-bold text-4xl text-pink-100 tracking-wide">Get in Touch</h1>
              <p className="mb-9 text-sm">
              I’m open to connecting for project collaborations, internships, or academic discussions. Don’t hesitate to reach out! Interested in my work or have an opportunity to discuss? Feel free to get in touch I'd love to hear from you!
 Whether it's for collaboration, learning opportunities, or feedback on my projects, I'm always happy to connect. Reach out anytime!
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <ion-icon name="call" className="text-pink-200 text-xl"></ion-icon>
                <span>+91 7540017432</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon name="mail" className="text-pink-200 text-xl"></ion-icon>
                <span>rinishajesline@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon name="location" className= "mb-6 text-pink-200 text-xl"></ion-icon>
                <span>36, Ambedkar Street, Panagudi</span><br/>
              </div>
            </div>
            <div className="flex space-x-4 text-lg mt-4">
              <a href="tel:+91 7540017432" className="icons " target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-phone"></i>
              </a>
              <a href="mailto:rinishajesline@gmail.com" className="icons" target="_blank" rel="noopener noreferrer">
                <i className="fa-regular fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/rinisha-jesline" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/rinishat" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </>
  );
};

export default Contact;
