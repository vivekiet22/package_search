import React, { useState } from 'react'

const DeleteConfirm = ({value,handleDelete}) => {

  const del= (e)=>{
    
    // console.log(value)
    handleDelete(value)
  }



  return (
    <div>
<i class='btn fa fa-trash' style={{color:'#555553' ,outline:"none"}} data-toggle="modal" data-target="#exampleModalCenter"></i>


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" data-backdrop="false" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
     
      <div className="modal-body">
        Are you sure you want to delete?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" value={value} onClick={del}>Yes</button>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default DeleteConfirm
