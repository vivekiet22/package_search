import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddFavs = ({ favs, handleSetFav }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [pack, setPack] = useState("");
  const [isSearching, setIsSearching] = useState(false)
  // useState
  const getData = async (val) => {
    let toSearch = val.target.value;
    if (toSearch.length !== 0) {
      let res = await fetch(`https://api.npms.io/v2/search?q=${toSearch}`);
      let parsedRes = await res.json();
      // console.log(parsedRes.results);
      setData(parsedRes.results);
    }
    setIsSearching(toSearch.length!=0)
  };

  const handleSubmit = () => {
    if (pack.length === 0) {
      window.alert("Select a package");
    } else if (value.length === 0) {
      window.alert("Please fill the reason");
    } else {
      handleSetFav(pack);

    }
  };
  const style = {
    height: "250px",
    overflow: "auto",
  };

  return (
    <div className="container mx-auto mt-5 " style={{ maxWidth: "800px" }}>
      <label className="float-left">
        <b>Search for NPM Packages</b>
      </label>
      <Link  className="btn btn-primary my-2 float-right" to="/">
        Your Fav
      </Link>
      <input
        style={{ border: "1px solid #D3D3D3", width: "100%" }}
        type="text"
        onChange={getData}
      />
    {data.length!==0 && isSearching?
      <>
      <b>Results</b>
      <div style={style}>
        {data.map((element) => {
          return (
            <>
              <p>
                <label>
                  <input className="mx-1 p-5"
                    type="radio"
                    value={element.package.name}
                    name="name"
                    onClick={() => setPack(element.package.name)}
                  />
                    {element.package.name}
                </label>
              </p>
            </>
          );
        })}
      </div>
      <div>
        <p className="mt-2">
          <b>Why is this your fav?</b>
        </p>

        <textarea
          style={{ border: "1px solid #D3D3D3", width: "100%", height: "100px" }}
          onChange={(v) => setValue(v.target.value)}
        />
        <br />
        <button class="btn btn-primary float-right" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      </>
      :isSearching?<p>No Results Found</p>:""}
    </div>
  );
};

export default AddFavs;
