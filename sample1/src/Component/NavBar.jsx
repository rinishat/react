import { User2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        {/* rgb(230, 115, 115) */}
            <div className="w-full h-[4rem] flex justify-center items-center bg-[#881517] shadow-md rounded-sm">
                <div className="w-[80%] h-full flex justify-center items-center flex-row">
                    <div className='w-1/2 flex h-full justify-start items-center font-bold text-xl text-white'> Rinisha Jesline T</div>
                    <div className='w-1/2 flex  h-full justify-end items-center'>
                        <ul className='w-full list-none flex flex-row justify-center gap-6'>
                            <Link to={'/'}>
                                <li className='font-bold text-xl text-white'>Profile</li>
                            </Link>
                            <Link to={'/projects'}>
                            <li className='font-bold text-xl text-white'>Projects</li>
                            </Link>
                            <Link to={'/contact'}>
                            <li className='font-bold text-xl text-white'>Contact</li>
                            </Link>
                        </ul>
                        <User2 className='h-9 w-9 text-white rounded-full border-2 border-white' />
                    </div>
                </div>

            </div>
        </>
    )
}
export default Navbar