import React from "react";

const ViewConfirm = ({ value }) => {
  return (
    <div>
      <i
        className="btn fa fa-eye"
        style={{ color: "#555553", outline: "none" }}
        data-toggle="modal"
        data-target={`#viewModalCenter${value.name}`}
      ></i>

      <div
        className="modal fade"
        id={`viewModalCenter${value.name}`}
        tabIndex="-1"
        role="dialog"
        data-backdrop="false"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{value.name}</h5>
            </div>
            <div className="modal-body">{value.reason}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewConfirm;
