import React from "react";
import "../Css/GenreWrap.css";

function GenreWrap(props) {
  const { res, globalArr } = props;

  return (
    <>
      {globalArr.map((child) => (
        <div className="genreWrap">
          <p className="genreHeading">{child}</p>
          <div className="genreCardsWrap">
          {res.map((obj) => (
             obj.genres.map((genreValue) => (
              genreValue === child ? 
              <div className="genreCard">
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