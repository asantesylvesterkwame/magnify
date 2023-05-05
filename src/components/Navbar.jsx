import React from 'react';
import searchIcon  from "./search.png"
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';


const Navbar = () => {
    const SearchResults = async (e) => {
        e.preventDefault();
        const searchInputValue = e.target.searchInput.value;
        console.log(searchInputValue);
        const options = {
            method: 'GET',
            url: 'https://google-search74.p.rapidapi.com/',
            params: {
              query: searchInputValue,
              limit: '10',
              related_keywords: 'true'
            },
            headers: {
              'X-RapidAPI-Key': '260dd5e289mshdb96ae4cccefbfap11a919jsn5685b58126c9',
              'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              const responseData = response.data;

          } catch (error) {
              console.error(error);
          }
    }

    
    
  return (
    <div className="mainDiv">
            <div className='border-none h-20 flex gap-10 items-center p-5 '>
        <div className="LogoDiv">
            <NavLink to="/"><h1 className='text-2xl font-bold'>Magnify</h1></NavLink>
        </div>
        <form onSubmit={SearchResults} className="searchBar">
            <div className="SearchBox flex border p-2.5 gap-1 rounded-2xl shadow ">
            <input  type="search" name='searchInput' placeholder='What are you looking for?' className='outline-none font-light sm:w-full '/>
            <button><img src={searchIcon} alt="searchButton"  className='w-5 h-5 hover:cursor-pointer' /></button>
            </div>
        </form>
        
    </div>
    <div className="SearchNavLinks flex w-full">
        <div className='flex gap-5  px-5 w-full shadow-lg focus:text-sky-600 cursor-pointer'>
            <NavLink to="/"><p className=' hover:text-sky-600'>All</p></NavLink>
            <NavLink to="/videos"><p className=' hover:text-sky-600'>Videos</p></NavLink>
            <NavLink to="/images"><p className=' hover:text-sky-600'>Images</p></NavLink>
            <NavLink to="/news"><p className=' hover:text-sky-600'>News</p></NavLink>   </div>
    </div>
    
</div>

    
    
  )
}

// export const resData = response.data;

export default Navbar