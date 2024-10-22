import React,{useState} from "react";
import {Link} from 'react-router-dom';


const TopLoginNav = () => {
    const [isOpen, setIsOpen] =useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
}

    return(
        <nav className="bg-blue-950 p-2 border">
            <div className='flex spax-x-6 justify-end items-center p-1 mx-auto text-white'>
                
                <div className="block lg:hidden">
                <button onClick={toggleMenu} className="text-blue-500 focus:outline-none lg:hidden">
                      <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      > <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                    </svg>
                    </button>
                </div>
                <ul className={`lg:flex lg:justify-center lg:block ${isOpen ? 'block' :'hidden'} lg:space-x-5`}>
                    <li>
                      <Link to='/events'
                       className='block hover:text-gray-300 lg:inline-block'>
                      About us
                      </Link>
                    </li>
                    <li>
                        <Link to='/'
                        className='block hover:text-gray-300 lg:inline-block'>
                        Contact us
                        </Link>
                    </li>
                    <li>
                        <Link to='/'
                        className='block hover:text-gray-300 lg:inline-block'>
                        NewsLetter
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                        Language
                        </Link>        
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default TopLoginNav;