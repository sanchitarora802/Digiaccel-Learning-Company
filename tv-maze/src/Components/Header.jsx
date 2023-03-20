import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../Css/Home.css";
import { updateSearch, updateSearchResult } from "../store/slices/SearchSlice";
import Search from "../Svg/search";

function Header() {

  const [searchValue, setSearchValue] = useState();

  const dispatch = useDispatch();

  const handleSearch = async () => {
    //dispatch is used directly to call the action creator which we need to call. Payloads are also passed 
    dispatch(updateSearch(true))
    try {
      const response = await (
        await fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
      ).json(); 
      // console.log('respone',response)
      dispatch(updateSearchResult(response))
      }
      catch (e) {
        console.log(e);
      }
  };

  const handleChange = async (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleClick = () => {
    console.log('function called')
    dispatch(updateSearch(false))
  }

  return (
    <div className="wrap" onClick={()=>handleClick()}>
      <p className="headingText">TV MAZE</p>
      <div className="searchBox">
        <div className="searchDiv" onClick={handleSearch}>
          <Search />
        </div>
        <input className="inputField" type="text" onChange={handleChange} value={searchValue} />
      </div>
    </div>
  );
}

export default Header;
