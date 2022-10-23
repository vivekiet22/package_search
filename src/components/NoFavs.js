import React from 'react'
import { Link } from "react-router-dom";

const NoFavs = () => {


  const style1 = {border:"1px solid grey", height:"300px"}
  return (
    <div className="container mx-auto " style={{maxWidth:"800px"}}>

      <h3 className="my-5">Welcome to Favorite NPM Packages</h3>

      <div className="my-5 text-center " style={style1}>
        <div className="container" style={{height:"115px"}}></div>

      <p className='mb-3 align-middle ' >You dont't have any favs yet. Please add.</p>
      <Link className='btn btn-primary align-middle' to="/add">Add Fav </Link>

      </div>
    </div>
  )
}

export default NoFavs
