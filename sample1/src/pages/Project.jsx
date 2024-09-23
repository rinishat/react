import Navbar from '../Component/NavBar'
import projectx from '../assets/img/project1.jpeg'
import projecty from '../assets/img/project2.jpeg'
import projectz from '../assets/img/project3.jpeg'

const Project = () => {
  return (
    <>
     <Navbar />
    <div className="min-h-[calc(100vh-4rem)] h-[80%] flex flex-wrap bg-[#f8bdc8] items-center justify-center  container mx-auto gap-3 overflow-hidden min-w-full">
      <div className="flex flex-wrap justify-center items-center gap-6 ">
        <div className="rounded-xl shadow-lg w-full bg-pink-100 max-w-xs md:max-w-sm lg:max-w-md">
          <div className="p-7 flex flex-col">
            <div className="overflow-hidden ">
            <img src={projectx} alt=" " className="w-100 h-45"/>
            </div>
            <h3 class="text-2xl md:text-3xl font-medium mt-3">Attendance Management System</h3>
            <p className="object-cover">The Attendance Management System is designed to efficiently track and manage employee or student attendance. Developed using Python and SQL, this system analyzing attendance data, thus simplifying the task for administrators and providing accurate reports.</p>
          </div>
        </div>
      
      {/* <div className="flex flex-wrap items-center justify-center min-h-screen container mx-auto"> */}
      <div className="rounded-xl shadow-lg bg-pink-100 w-full max-w-xs md:max-w-sm lg:max-w-md">
        
          <div className="p-7 flex flex-col">
            <div className="rounded-xl overflow-hideen">
            <img src={projecty} alt=" " className="w-100 h-70"/>
            </div>
            <h4 class="text-2xl md:text-3xl font-medium mt-3 leading-loose">Excel Sales Dashboard</h4>
            <p>The Excel Sales Dashboard a dynamic tool designed to provide a comprehensive overview of sales performance and trends. This interactive dashboard uses Excel's powerful data visualization and analysis features to help businesses monitor their activities, track key metrics, and make data-driven decisions.</p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg bg-pink-100 w-full max-w-xs md:max-w-sm lg:max-w-md">
        
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hideen">
            <img src={projectz} alt=" " className="w-100 h-70"/>
            </div>
            <h4 class="text-2xl md:text-3xl font-medium mt-3">Recommendation System</h4>
            <p>This project is a Recommendation System built using Python, aimed at providing personalized suggestions to users based on their preferences or previous behavior. The system uses various algorithms such as collaborative filtering, content-based filtering, or a hybrid approach to recommend products, movies, or other items.</p>
          </div>
        </div>
      </div>
      </div>
      
      

    </>
  )
}

export default Project