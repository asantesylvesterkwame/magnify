import React from 'react';
import testImage from "./testImg.jpg"
// import { SearchResults } from './Navbar';
const AllResults = (props) => {
  return (
    <div className='border-5 p-5 flex flex-col gap-3'>
      <div className="topLinkDIv flex gap-2.5">
      <div className="ImagediV">
          <img src={testImage} alt="" className='w-10 rounded-full'/>
        </div>
        <div className="titleandLinkDiv flex flex-col">
          <div className="mainTitle">
              <h3>{props.title}</h3>
          </div>
          <div className="mainLink">
              <p className='text-xs'>www.theweeknd.com</p>
          </div>
        </div>
      </div>
      <div className="HyperLinksandshortexplainDiv flex flex-col">
          <div className="MainHyperlink">
            <h1 className='font-medium cursor-pointer hover:underline text-blue-600 text-xl'>The Weeknd</h1>
          </div>
          <div className="shortExplanationationdiv">
            <p>The After Hours Til Dawn global stadium tour kicks off up north in The Weeknd's hometown of Toronto on Friday, July 8th at the Rogers Centre, with stops at ...</p>
          </div>
      </div>
    </div>
  )
}

export default AllResults