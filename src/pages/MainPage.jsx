import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import searchIcon  from "../components/search.png"
import { Routes, BrowserRouter, Route, NavLink } from 'react-router-dom'
import AllResults from '../components/AllResults'
import VideoResults from '../components/VideoResults'
import ImageResults from '../components/ImageResults'
import NewsResult from '../components/NewsResults'
import { useState, useEffect } from 'react';
import axios from 'axios';




const MainPage = () => {
  const [resultsApi, setResultApi] = useState();

  const SearchResults =  (e) => {
    e.preventDefault();
    const searchInputValue = e.target.searchInput.value;
    console.log(searchInputValue);
  
  }
  const options = {
    method: 'GET',
    url: 'https://google-search74.p.rapidapi.com/',
    params: {
      query: 'Nike',
      limit: '10',
      related_keywords: 'true'
    },
    headers: {
      'X-RapidAPI-Key': '260dd5e289mshdb96ae4cccefbfap11a919jsn5685b58126c9',
      'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
    }
  };

  useEffect(()=>{
     axios.request(options).then(function (response){
    console.log(response.data);
  }).catch (function (error) {
    console.error(error);
  })
  },[] )


  



  return (
    <div className='flex flex-col justify-between'>
        
        <>
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
        {/* <Navbar/> */}
            <Routes>
                <Route exact path='/' element={<AllResults resultsApi={resultsApi}/>} />
                <Route exact path='/videos' element={<VideoResults/>}/>
                <Route  path='/images' element={<ImageResults/>}/>
                <Route  path='/news' element={<NewsResult/>}/>
            </Routes>
        <Footer/>
        </>
        
    </div>
  )
}

export default MainPage