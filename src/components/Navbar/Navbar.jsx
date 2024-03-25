import { useState,useEffect } from "react"
import { FaAlignJustify } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import './Navbar.css'
function Navbar() {
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const[isSticky,setIsSticky]=useState(false);
    //set toggle Menu
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    useEffect(()=>{
        const handelScroll =() =>{
            if(window.scrollY>100){
                setIsSticky(true);

            }else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll',handelScroll);
        return()=>{
            window.addEventListener('scroll',handelScroll);
        }
    });
    //navitems array
    const navitems =[
        {link:"Home",path:"home"},
        {link:"About Us",path:"about us"},
        {link:"Diploma",path:"diploma"},
        {link:"Students",path:"students"},
        {link:"Accreditations",path:"accreditations"},
        {link:"Library",path:"library"},
        {link:"Portal",path:"portal"},
        {link:"Contact Us",path:"contact us"},
    ]

  return (
    <>
    <header className="w-full bg-darkMidnightBlue md:bg-transparent fixed right-0 left-0 top-0">
        <div className=' flex justify-between items-center  w-full bg-darkMidnightBlue py-4 lg:px-14 px-4'>
            <div className='flex '>
            <div className='flex align-center '>
                <div><SlLocationPin className='text-whiteSmoke  text-[15px] mt-[2px]'/></div>
                <div className='text-whiteSmoke ms-1 text-[14px]'>P.O.Box 4054- Riyadh 12464</div>
            </div>
            <div className='border-l border-whiteSmoke h-6 mx-6'></div>
            <div className='flex align-center '>
                <div><MdOutlineMailOutline className='text-whiteSmoke  text-[15px] mt-[2px]'/></div>
                <div className='text-whiteSmoke ms-1 text-[14px]'>INFO@EXAMPLE.COM</div>
            </div>
            <div className='border-l border-whiteSmoke h-6 mx-6'></div>
            <div className='flex align-center '>
                <div><FiPhone className='text-whiteSmoke  text-[15px] mt-[2px]'/></div>
                <div className='text-whiteSmoke ms-1 text-[14px]'>+99999999999</div>
            </div>
            </div>
            <div className='flex'>
                <FaFacebookF className='text-whiteSmoke  text-[15px] ms-2'/>
                <FaXTwitter className='text-whiteSmoke  text-[15px] ms-2' />
                <IoLogoGoogleplus className='text-whiteSmoke  text-[15px] ms-2' />
                <FaYoutube className='text-whiteSmoke  text-[15px] ms-2' />

            </div>
        </div>
        <nav
            className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300 " : " "}`}>
            <div className="flex justify-between items-center text-base gap-8  ">

                {/* nav items for large devices  */}
                <ul className="md:flex space-x-6 hidden">
                    <li className="block text-2xl text-white font-bold nav-style">Home</li>
                    <li className="block text-2xl text-white font-bold nav-style">About Us</li>
                    <li className="block text-2xl text-white font-bold nav-style">Diploma</li>
                    <li className="block text-2xl text-white font-bold nav-style">Students</li>
                    <li className="block text-2xl text-white font-bold nav-style">Accreditations</li>
                    <li className="block text-2xl text-white font-bold nav-style">Library</li>
                    <li className="block text-2xl text-white font-bold nav-style">Portal</li>
                    <li className="block text-2xl text-white font-bold nav-style">Contact Us</li>
                    {/* {navitems.map(({ link, path }) => (
        
            <Link to={path} spy={true} smooth={true} offset={-100}  key={path} className="block text-base text-gray900 " >{link}</Link>
       
    ))} */}
                </ul>

                {/* btn for large device */}
                <div className="space-x-12 hidden  lg:flex items-center">
                    <button className='registerbtn'>
                        Register Now
                    </button>

                </div>
                {/* menu btn for only mobile device */}
    <div className="md:hidden ">
        <button onClick={toggleMenu} className=" text-red-600 focus:outline-none focus:text-gray-500">
            {
                isMenuOpen ? (<IoClose className="h-6 w-6 " />) : (<FaAlignJustify className="h-6 w-6 " />)
            }

        </button>

    </div>
    </div>
    {/* nav item for mobile device  */}

    <div className={`space-x-4 px-4 mt-16 py-7 bg-skyBlue ${isMenuOpen ? 'block fixed top-0  right-0 left-0':'hidden'}`}>

            <li className="block text-2xl text-white  hover:text-red-500">Home</li>
            <li className="block text-2xl text-white  hover:text-red-500">About Us</li>
            <li className="block text-2xl text-white  hover:text-red-500">Diploma</li>
            <li className="block text-2xl text-white  hover:text-red-500">Students</li>
            <li className="block text-2xl text-white  hover:text-red-500">Accreditations</li>
            <li className="block text-2xl text-white  hover:text-red-500">Library</li>
            <li className="block text-2xl text-white  hover:text-red-500">Portal</li>
            <li className="block text-2xl text-white  hover:text-red-500">Contact Us</li>
    </div>
        </nav>
    </header>
    </>

  )
}

export default Navbar