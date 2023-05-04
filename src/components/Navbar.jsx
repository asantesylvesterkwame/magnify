import React from 'react';
import searchIcon  from "./search.png"

const Navbar = () => {
  return (
    <div className="mainDiv">
            <div className='border-none h-20 flex gap-10 items-center p-5 '>
        <div className="LogoDiv">
            <h1 className='text-2xl font-bold'>Magnify</h1>
        </div>
        <div className="searchBar">
            <div className="SearchBox flex border p-2.5 gap-5 rounded-2xl shadow">
            <input type="search" placeholder='What are you looking for?' className='outline-none font-light'/>
            <img src={searchIcon} alt="searchButton" className='w-5 h-5 hover:cursor-pointer' />
            </div>
        </div>
        <br />
        
    </div>
    <div className="SearchNavLinks flex w-full">
        <ul className='flex gap-5  px-5 w-full shadow-lg focus:text-sky-600 cursor-pointer'>
            <li className=' hover:text-sky-600'>All</li>
            <li className=' hover:text-sky-600'>Videos</li>
            <li className=' hover:text-sky-600'>Images</li>
            <li className=' hover:text-sky-600'>News</li>
        </ul>
    </div>
</div>

    
    
  )
}

export default Navbar