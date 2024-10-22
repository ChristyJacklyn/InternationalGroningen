import React,{useState} from "react";
import {Link } from "react-router-dom";

const LoginNav = () => {

        const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };

        const toggleDropDown = () =>{
          setIsOpen(!isOpen);
        }

    
    return(
        <nav className="bg-white p-7 rounded-sm border-4">
            <div className="container mx-auto flex justify-between items-center border-2 rounded-md p-4 ">
                <div className="text-blue-800 text-lg font-semibold">
                <Link to="/">International Groningen</Link>
                </div>
                <div className="block lg:hidden">
                  <button
                      onClick={toggleMenu}
                      className="text-blue-800 focus:outline-none lg:hidden">
                      <svg
                      className="w-6 h-6"
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
                  </button>
                </div>
        <ul className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block font-trirong` }>
        <li>
            <Link
              to="/whygroningen"
              className="block text-blue-800 hover:text-gray-300 lg:inline-block"
            >
              Why Groningen Region
            </Link>
          </li>
          <li>
            <Link
              to="/relocating"
              className="block text-blue-800 hover:text-gray-300 lg:inline-block"
            >
             Relocating
            </Link>
          </li>
          
          
        <li>
            <Link
              to="/workingingroningen"
              className="block text-blue-800 hover:text-gray-300 lg:inline-block"
            >
             Working
            </Link>
          </li>
          <li>
            <Link
              to="/studyingroningen"
              className="block text-blue-800 hover:text-gray-300 lg:inline-block"
            >
            Study
            </Link>
          </li>
          <li>
            <Link
              to="/connect"
              className="block text-blue-800 hover:text-gray-300 lg:inline-block"
            >
             Connect
            </Link>
          </li>
         
        </ul>
      </div>
    </nav>
    );
        {/*<header>
            <div className="flex flex-col">
                    {/* Logo 
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-10 w-auto" />
                    </Link>*******
            <nav className="bg-black p-10 pl-9 flex">
                <div className="text-white text-lg font-bold align-center">
                   <Link to="/"> MyWebsite </Link>
                </div>
                <ul className="flex space-x-7 ml-auto">
                <li>
                    <Link to="/registrationForm" className="text-white 
                        hover:text-gray-200
                        transition-colors 
                        duration-300 
                        font-medium 
                        focus:outline-none 
                        focus:ring-1
                        focus:ring-gray-300 
                        focus:ring-offset-2 
                        rounded 
                        px-3 
                        py-2">
                            Register
                    </Link>
                    </li>
                    <li>
                    <Link to="/about" className="text-white  hover:text-gray-200
                        transition-colors 
                        duration-300 
                        font-medium 
                        focus:outline-none 
                        focus:ring-1
                        focus:ring-gray-300 
                        focus:ring-offset-2 
                        rounded 
                        px-3 
                        py-2">
                        Login
                    </Link>
                    </li>
                    <li>
                    <Link to="/contact" className="text-white  hover:text-gray-200
                        transition-colors 
                        duration-300 
                        font-medium 
                        focus:outline-none 
                        focus:ring-1
                        focus:ring-gray-300 
                        focus:ring-offset-2 
                        rounded 
                        px-3 
                        py-2">
                            Contact
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
        </header>); */}
};

export default LoginNav;