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
          <p className="text-xl">7540017432</p>
          <h1 className="text-xl"></h1>
        </div>
      </div>
    </>
  )
}

export default Contact