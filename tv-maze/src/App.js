import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GenreWrap from "./Components/GenreWrap";
import Header from "./Components/Header";
import SearchResult from "./Components/SearchResult";

function App() {
  const [res, setRes] = useState();
  const [globalArr, setGlobalArr] = useState([]);
  
  var dummyglobalArr = [];

  const storeState = useSelector((state) => {
    return state.Search
  })

  const {isSearch} = storeState

  const fetchData = async () => {
    try {
      const response = await (
        await fetch("https://api.tvmaze.com/shows")
      ).json();
      for (const el of response) {
        for (const genre of el.genres) {
          if (dummyglobalArr.indexOf(genre) === -1) dummyglobalArr.push(genre);
        }
      }
      setGlobalArr(dummyglobalArr); //set array respone
      setRes(await response); // api response store
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    return;
  }, []);


  return (
    <div className="App">
      <Header />
      {!isSearch && <GenreWrap res={res} globalArr={globalArr} />}
      {isSearch && <SearchResult />}
    </div>
  );
}

export default App;
