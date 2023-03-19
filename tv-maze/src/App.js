import { useEffect, useState } from "react";
import GenreWrap from "./Components/GenreWrap";
import Header from "./Components/Header";

function App() {
  const [res, setRes] = useState();
  const [globalArr, setGlobalArr] = useState([]);

  var dummyglobalArr = [];

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
      <GenreWrap res={res} globalArr={globalArr} />
    </div>
  );
}

export default App;
