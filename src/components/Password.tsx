import './Password.css';
import { useState } from "react";

export function Password() {
  const [modal, setModal] = useState(false);

  function handleChangeClick() {
    setModal(!modal);
    if (modal) {
      document.body.classList.remove("stop-scrolling");
    } else {
      document.body.classList.add("stop-scrolling");
    }
  }

  return (
    <div className="container">
      <div className="upper_row">
        <h4>PASSWORD & SECURITY</h4>
        <button onClick={handleChangeClick}>Change</button>
      </div>

      <p>Password</p>
      <input className="input" disabled value="* * * * * * * *" />
      <div className={"line"} />
      {modal && <PasswordModal />}
    </div>
  );

  function PasswordModal() {
    return (
      <>
        <div
          onClick={handleChangeClick}
          className="modal_background"
        ></div>
        <form className="password_modal_form">
          <p className="title">Current Password</p>
          <input
            placeholder="Current Password"
            className="password_modal_input"
          />
          <p className="title">New Password</p>
          <input
            placeholder="New Password"
            className="password_modal_input"
          />
          <p className="title">Confirm Password</p>
          <input
            placeholder="Confirm Password"
            className="password_modal_input"
          />
          <div className="bottom_row">
            <button onClick={handleChangeClick} className="btn">
              Cancel
            </button>
            <button className="btn">Save</button>
          </div>
        </form>
      </>
    );
  }
}
