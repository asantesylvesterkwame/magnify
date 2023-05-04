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
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path='/all' element={<AllResults />} />
                <Route path='/videos' element={<VideoResults/>}/>
                <Route path='/images' element={<ImageResults/>}/>
                <Route path='/news' element={<NewsResult/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  )
}

export default MainPage