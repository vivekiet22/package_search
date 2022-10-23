import './App.css';
import AddFavs from './components/AddFavs';
import HasFavs from './components/HasFavs';
import NoFavs from './components/NoFavs';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"


function App() {
  const [favs, setFavs] = useState([])

  const handleSetFav = (pack)=>{ 
    var i;
    for (i = 0; i < favs.length; i++) {
        if (favs[i].name === pack) {
            window.alert("Already added")
            return false
        }
    }
    setFavs([...favs,{
      name:`${pack}`
    }])

    // window.alert("Added to favorite")
  }

  const handleDelete = (key)=>{
      console.log("delete  in process")
      console.log(key)
      const newFav = favs.filter(fav =>fav.name !== key)
      setFavs(newFav)

  }
  return (
    <>
    <Routes>
        <Route path="add" element={ <AddFavs favs={favs} handleSetFav={handleSetFav} /> } />
       
        <Route path="/" element={favs.length !==0? <HasFavs favs={favs} handleDelete={handleDelete} />:<NoFavs /> } />
   
      </Routes>    
    </>
  );
}

export default App;
