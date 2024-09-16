const Navbar = ({appname})=>{
    // console.log(appname)
    // const {name,id} = appname; //deconstructing property
    return(
         <div className="w-full h-[7%] bg-pink-300 p-4 text-pink-950 flex justify-start items-start">
           
            {appname.name}
            {appname.id}
            </div>
        
        
    )
}

export default Navbar;