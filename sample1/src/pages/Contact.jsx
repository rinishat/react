import Navbar from "../Component/NavBar"

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#f8bdc8] min-h-screen flex ">
        <div className="flex-1 flex justify-center items-center">
          <h1 className="text-3xl font-bold">I'd love to hear from you. </h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <h1 className="text-xl">rinishajesline@gmail.com</h1>
          
          <h2 className="text-end">7540017432</h2>
        </div>
      </div>
    </>
  )
}

export default Contact