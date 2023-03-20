import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid'
import "../Css/GenreWrap.css";
import { updateSearch, updateSearchResult } from "../store/slices/SearchSlice";

function GenreWrap(props) {
  const { res, globalArr } = props;

  const dispatch = useDispatch();

  const getDetails = async (showId) =>{
    try {
      const response = await (
        await fetch(` https://api.tvmaze.com/shows/${showId}`)
      ).json(); 
      dispatch(updateSearchResult(response))
      }
      catch (e) {
        console.log(e);
      }
    dispatch(updateSearch(true))
  }

  return (
    <>
      {globalArr.map((child) => (
        <div key={uuidv4()} className="genreWrap">
          <p className="genreHeading">{child}</p>
          <div key={uuidv4()} className="genreCardsWrap">
          {res.map((obj) => (
             obj.genres.map((genreValue) => (
              genreValue === child ? 
              <div key={uuidv4()} className="genreCard" onClick={()=>{
                getDetails(obj.id)
              }}>
                <img src = {obj.image.medium} alt={obj.name}/>
              </div> 
              : <></>
             ))
          ))
          }
          </div>
        </div>
      ))}

    </>
  );
}

export default GenreWrap;