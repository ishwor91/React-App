import React from "react";
class AddContact extends React.Component {
  render() {
    return (
      <>
      <div className="container">
        <button type="button" className="btn btn-primary" id="liveToastBtn">
          Show live toast
        </button>

        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            id="liveToast"
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <img src="..." className="rounded me-2" alt="..." />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>
        <ul className="list-group py-3">
  <li className="list-group-item active" aria-current="true">An active item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>
        </div>
        
      </>
    );
  }
}
export default AddContact;
