import React, { useState } from "react";
import DeleteConfirm from "./DeleteConfirm";

import { Link } from "react-router-dom";

const HasFavs = ({favs,handleDelete}) => {

  
  const style1 = {border:"1px solid #D3D3D3"}
  return (
    <div className="container mx-auto " style={{maxWidth:"800px"}}>
      <h3 className="float-left my-5">Welcome to Favorite NPM Packages</h3>

      <Link className="btn btn-primary float-right my-5" to="/add">Add Fav </Link>
       
        <table className="container my-5" style={{border:"1px solid #D3D3D3"}}>
          <tbody>
          <tr style={style1}>
            <th  className="p-2" style={{border:"1px solid #D3D3D3"}}>Package Name</th>
            <th className="p-2">Actions</th>
          </tr>
          
          {
            favs.map((favorite)=>{
              
              return (
                <tr style={style1} class key={favorite.name}>
                  <td className="p-2" style={{border:"1px solid #D3D3D3"}}>
                    {favorite.name}     
                  </td>
                  <td className="p-2">
                  
                    <DeleteConfirm  value={favorite.name} handleDelete={handleDelete}  />
                  </td>
                </tr>
              )
            })
          }

        
</tbody>
        </table>
    </div>
  );
};

export default HasFavs;
