import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import AllResults from '../components/AllResults'
import VideoResults from '../components/VideoResults'
import ImageResults from '../components/ImageResults'
import NewsResult from '../components/NewsResults'

const MainPage = () => {
  return (
    <div className='flex flex-col justify-between'>
        
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route exact path='/' element={<AllResults />} />
                <Route exact path='/videos' element={<VideoResults/>}/>
                <Route  path='/images' element={<ImageResults/>}/>
                <Route  path='/news' element={<NewsResult/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
        
    </div>
  )
}

export default MainPage