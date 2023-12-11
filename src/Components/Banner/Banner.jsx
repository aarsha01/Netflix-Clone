import React from 'react'
import  './Banner.css'
function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie name</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum doloremque perspiciatis doloribus, fugiat optio error velit, perferendis eaque, repellat excepturi! Vitae praesentium ut dolor incidunt dicta debitis vero quos!</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
