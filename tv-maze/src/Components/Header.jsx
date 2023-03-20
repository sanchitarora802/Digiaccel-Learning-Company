import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../Css/Home.css";
import { updateSearch, updateSearchResult } from "../store/slices/SearchSlice";
import Snackbar from '@mui/material/Snackbar';
import Search from "../Svg/search";

function Header() {

  const [searchValue, setSearchValue] = useState();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnack = () => {
   setOpenSnackbar(false)
    }

    const handleOpenSnack = () => {
      setOpenSnackbar(true);
    };
  

  const dispatch = useDispatch();

  const handleSearch = async () => {
    //dispatch is used directly to call the action creator which we need to call. Payloads are also passed 
    try {
      const response = await (
        await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${searchValue}`)
      ).json(); 
      console.log('respone',response)
      if(response === {} || response === null)
      handleOpenSnack()
      else{
        dispatch(updateSearchResult(response))
        dispatch(updateSearch(true))
      }
      setSearchValue('')
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
    dispatch(updateSearch(false))
  }

  return (
    <>
    <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
        message="Show Not Found"
      />
    <div className="wrap" onClick={()=>handleClick()}>
      <p className="headingText">TV MAZE</p>
      <div className="searchBox">
        <div className="searchDiv" onClick={handleSearch}>
          <Search />
        </div>
        <input className="inputField" type="text" onChange={handleChange} value={searchValue} />
      </div>
    </div>
    </>
  );
}

export default Header;
