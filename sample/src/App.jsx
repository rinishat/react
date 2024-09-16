import Navbar from "./Components/NavBar"

const App = () => {
    const Appname ={id:11,name:"Hello"};
    return(
    

         <>
          
          <div className="h-screen w-screen flex flex-col justify-start items-start">
                <Navbar appname={Appname}/>
          </div>


         </>
    )
}

export default App