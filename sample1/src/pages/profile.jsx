
import Navbar from '../Component/NavBar'
import Profilex from '../assets/img/rini.jpeg'
const Profile = () => {
    return (
        <> 
            <Navbar />

            <div className="min-h-screen w-full flex flex-col md:flex-row justify-center items-center bg-[#ffb3c1] overflow-hidden">
            <div className=" mt-15 w-1/2 flex  justify-center items-center">
                <img src={Profilex} alt="profile" className="rounded-full h-65 w-65 justify-center items-center shadow-2xl" />
                </div>
        
                <div className="w-1/2 flex-col justify-center items-start">
                <h1 className="text-5xl font-bold text-left leading-loose">Rinisha Jesline T</h1>
                <p className="flex font-bold text-center leading-relaxed">A bit about me</p>
                <p className="flex text-left leading-loose mr-20">I am currently a student at Sri Shakthi Institute of Engineering and Technology,where I am honing my skills in various programming languages and technologies.My expertise includes HTML,CSS,JavaScript,Python and C, which I have used to build diverse projects. I am also expanding my knowledge in full-stack development with a focus on the MERN stack. My academic and project experience reflects a strong foundation in both front-end and back-end development, and I am eager to apply these skills in real-world applications.</p>
 
                </div>
                </div>
                
        </>
    )
}

export default Profile