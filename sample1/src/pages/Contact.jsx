import Navbar from "../Component/NavBar"
import contactx from "../assets/img/contact.jpeg"

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen overflow-hidden">
      <div>
        {/* className="absolute inset-0 bg-[url('/img/contact.jpeg')] bg-cover bg-center" */}
        <img src={contactx} alt=" " className="absolute inset-0 w-full h-full object-cover"></img>
     
      <div className="absolute inset-0 bg-pink-200 bg-opacity-60" ></div>
    </div>
    </div>
    </>
  )
}

export default Contact