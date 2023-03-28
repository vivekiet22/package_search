import React, {useState} from "react";

const EditConfirm = ({ value, handleEdit }) => {

  const [editName, setEditName] = useState(value.name);
  const [editReason, setEditReason] = useState(value.reason);

  const cancelEdit = () => {
    setEditName(value.name);
    setEditReason(value.reason);
  };

  const editFavorite = (favoriteName) => {
    const editedFavorite = {
      name: editName,
      reason: editReason
    }
    handleEdit(favoriteName, editedFavorite);
  };

  return (
    <div>
      <i
        className="btn fa fa-pencil-square-o"
        style={{ color: "#555553", outline: "none" }}
        data-toggle="modal"
        data-target={`#editModalCenter${value.name}`}
      ></i>

      <div
        className="modal fade"
        id={`editModalCenter${value.name}`}
        tabIndex="-1"
        role="dialog"
        data-backdrop="false"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">package name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={editName}
                    onChange={event => setEditName(event.target.value)}
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">why is it your favorite:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    value={editReason}
                    onChange={event => setEditReason(event.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={cancelEdit}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => editFavorite(value.name)}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditConfirm;
