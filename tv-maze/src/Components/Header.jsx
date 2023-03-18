import React from 'react'
import '../Css/Home.css'
import Search from '../Svg/search'



const handleSearch=()=>{
  alert('hello from function')
}

function Header() {
  return (
    <div className='wrap'>
        <p className='headingText'>TV MAZE</p>
        <div className='searchBox'>
        <div className='searchDiv' onClick={handleSearch}>
        <Search/>
        </div>
        <input className='inputField' type="text" id="search" name="search"/>
        </div>
    </div>
  )
}

export default Header