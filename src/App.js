import "./App.css";
import "react-notifications-component/dist/theme.css";
import AddFavs from "./components/AddFavs";
import HasFavs from "./components/HasFavs";
import NoFavs from "./components/NoFavs";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ReactNotifications } from "react-notifications-component";
import showNotification from "./components/showNotification";

function App() {
  const [favs, setFavs] = useState([]);

  const handleSetFav = (pack, value) => {
    var i;
    for (i = 0; i < favs.length; i++) {
      if (favs[i].name === pack) {
        showNotification("Error", "Already Added", "Danger");
        return false;
      }
    }
    setFavs([
      ...favs,
      {
        name: `${pack}`,
        reason: `${value}`,
      },
    ]);
    showNotification("Congrats", "Added to Favorite", "Success");
  };
  useEffect(() => {
    if (favs.length) {
      localStorage.setItem("favs", JSON.stringify(favs));
    }
  }, [favs]);

  useEffect(() => {
    const localStorageFavs = JSON.parse(localStorage.getItem("favs"));
    if (localStorageFavs) {
      setFavs(localStorageFavs);
    }
  }, []);

  const handleDelete = (key) => {
    console.log("delete  in process");
    console.log(key);
    const newFav = favs.filter((fav) => fav.name !== key);
    setFavs(newFav);

    showNotification("Success", "Package Deleted From Fav", "success");
  };

  const handleEdit = (key, editFav) => {
    console.log("edit  in process");
    console.log(key);
    const newFavs = favs.map((fav) => {
      if(fav.name === key) {
        fav.name = editFav.name;
        fav.reason = editFav.reason;
        return fav;
      }
      return fav;
    });
    setFavs(newFavs);

    showNotification("Success", "Package editted From Fav", "success");
  };

  return (
    <>
      <ReactNotifications />
      <Routes>
        <Route
          path="add"
          element={<AddFavs favs={favs} handleSetFav={handleSetFav} />}
        />

        <Route
          path="/"
          element={
            favs.length !== 0 ? (
              <HasFavs favs={favs} handleDelete={handleDelete} handleEdit={handleEdit} />
            ) : (
              <NoFavs />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
