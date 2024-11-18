import React,{useState} from "react";
import {Link, Outlet } from "react-router-dom";
import searchicon from './assets/searchicon.png';
import cancleicon from './assets/cancleicon.png';
import Search from "./Components/search";
import SearchLayout from "./Components/searchLayout";
import gnlogo from './assets/gnlogo.png';

const LoginNav = () => {

        const [isOpen, setIsOpen] = useState(false);
        const [isVisible, setIsVisible] =useState(false);
        const [cancle, setCancle] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };

    

        const handleOnClick =() =>{
          setIsVisible(!isVisible);
        }

        const handlecancle =() => {
          setIsVisible(!isVisible);
        }
    
    return(
        <nav className="p-7 rounded-sm border-4 bg-orange-50">
            <div className="container mx-auto flex justify-between items-center border-2 rounded-md p-4 bg-white">
                <div className="text-blue-800 text-lg font-semibold font-oswald" style={{width:'120px', height:'auto', fontSize:'30px'}}>
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
        <ul className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block font-oswald text-gray-800`}
        style={{zIndex: isVisible ? 1 : 10,fontSize:'20px', fontWeight:'semi-bold' /* Lower z-index than overlay div when isVisible is true*/}}>
         
        <li>
            <Link
              to="/whygroningen"
              className="block  hover:text-gray-500 lg:inline-block"
             >
              <div className="dropdown">
                <button className="dropbtn">Why Groningen</button>
                <div className="dropdown-content rounded">
                  <div className="rounded-xl bg-white font-oswald ">
                      <div><a href="" className="href relative">Living <div className="absolute top-0 left-20" style={{fontSize:'30px',color:'black',fontWeight:'bold'}}> &#8594;</div></a></div>
                      <div><a href="" className="href relative">Working<div className="absolute top-0 left-20" style={{fontSize:'30px',color:'black',fontWeight:'bold'}}> &#8594;</div></a></div>
                      <div><a href="" className="href relative">Study<div className="absolute top-0 left-20" style={{fontSize:'30px',color:'black',fontWeight:'bold'}}> &#8594;</div></a></div>
                      </div> 
                    </div>
                </div>
              
            </Link>
          </li>
          <li>
            <Link
              to="/relocating"
              className="block hover:text-gray-300 lg:inline-block"
            >
             Relocating
            </Link>
          </li>
          
          
        <li>
            <Link
              to="/workingingroningen"
              className="block hover:text-gray-300 lg:inline-block"
            >
             Working
            </Link>
          </li>
          <li>
            <Link
              to="/studyingroningen"
              className="block  hover:text-gray-300 lg:inline-block"
            >
            Study
            </Link>
          </li>
          <li>
            <Link
              to="/business"
              className="block  hover:text-gray-300 lg:inline-block"
            >
           Doing Business
            </Link>
          </li> 

                     <Link to='/language'>
                        <li className=""><img src={searchicon} alt="" style={{width:'30px', height:'30px',color:''}}/></li>
                        </Link>   
         
        </ul>
      </div>
          {/*{isVisible && 
            <Search/>
          }
          */}


          
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