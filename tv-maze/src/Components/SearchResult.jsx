import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import "../Css/SearchResult.css";

function SearchResult() {

var storeData = useSelector((state) =>{
     return state.Search
     })
 const {searchResult} = storeData

  return (
    <div className='searchWrap'>
        <div className='searchImg'>
          <img style = {{width: '300px',height: '450px'}} src={searchResult.image.medium} alt='not available'/>
        </div>
        <div className='ContentWrap'>
          <div className='TitleWrap'>
          <label className='title'>{searchResult.name && searchResult.name}</label>
          </div>
          <div className='TitleWrap'>
          <label className='title'>{searchResult.premiered && searchResult.premiered} | {searchResult.runtime && searchResult.runtime}</label>
          </div>
          <div className='SummaryWrap'>
          <label className='SummaryLabel'> Movie Description </label>
          <div className='summaryText' dangerouslySetInnerHTML={{__html : searchResult.summary}}></div>
          </div>
        </div>
    </div>
  )
}

export default SearchResult