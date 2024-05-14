// Navbar.js
import React from 'react';
import { GoChevronRight } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";





const Navsm = () => {
    return (
        <div className='text-white flex justify-between items-center'>
            <div>
            <h3 className='font-bold text-xxl'>It All Starts Here</h3>
            <span className='text-grey-400 text-xs flex items-center'>
                Hyderabad   <GoChevronRight className='w-3 h-4 ml-1	'/>
            </span>
            </div>
            <div className='w-8' h-8>
            <CiSearch className='w-full h-full'/>

            </div>

        </div>
    );
};

const Navmd = () => {
    return( <>
    <div className="flex items-center bg-white rounded-md p-2 w-full">
            <CiSearch className="text-gray-500" />
            <input
                type="search"
                className="w-full outline-none pl-2"
                placeholder="Search for movies, plays, events, sports, and activities"></input>


    </div>
    </>
); // Add your content for medium screen here
};

const Navlg = () => {
    return (<>

<div className="container mx-auto px-4 flex justify-between">
            <div className="flex items-center w-1/2 gap-3 pl-10">
                <div>
                    <img src="https://in.bmscdn.com/bmsin/new/BMS_logo_new.png" alt="Book my show" className="w-13 h-10" />
                </div>
                <div className="flex items-center bg-white rounded-md p-2 w-full">
                    <CiSearch className="text-gray-500" />
                    <input
                        type="search"
                        className="w-full outline-none px-2"
                        placeholder="Search for movies, plays, events, sports, and activities"
                    />
                </div>
            </div>

            <div className='flex items-center gap-3 pr-10'>
            <span className='text-gray-400 text-xs flex items-center hover:text-white cursor-pointer'>
                Hyderabad <BiChevronDown className='w-3 h-4 ml-1' />
            </span>
            <button className='bg-red-600 text-white rounded-md text-sm px-2 py-1 pd-1 w-20 h-7 '>
                Sign In
            </button>
            <div className='w-8 h-8'>
            <IoMdMenu className='w-full h-full text-white cursor-pointer hover:text-grey-600' />

            </div>
        </div>

</div>






    </>); // Add your content for large screen here
};

const Navbar = () => {
    return (
        <nav className="bg-navCol-800 p-2 ">
           
            <div className="md:hidden">
                <Navsm/>
            </div>
            
            <div className="hidden md:flex lg:hidden">
                <Navmd />
            </div>
            <div className="hidden lg:flex">
                <Navlg />
            </div>
        </nav>
    );
};

export default Navbar;
