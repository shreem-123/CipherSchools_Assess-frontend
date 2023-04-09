import './Interests.css'
import React, { useState } from "react";

export function Interests() {
  const [modal, setModal] = useState(false);
  let interests: string[] = [];

  function handleEditClick() {
    setModal(!modal);
    interests = [];

    if (modal) {
      document.body.classList.remove("stop-scrolling");
    } else {
      document.body.classList.add("stop-scrolling");
    }
  }

  return (
    <>
      <div className="upper_row-int">
        <h4>INTERESTS</h4>
        <button onClick={handleEditClick}>Edit</button>
      </div>
      {modal && <InterestsModal />}
    </>
  );

  function InterestsModal() {
    function handleAddInterestClick(e: React.MouseEvent<HTMLLIElement>) {
      const target = e.target as HTMLLIElement;
      target.style.backgroundColor = "#f3912e";

      const title = target.innerText.toString();
      const newArr = interests.filter((i) => i != title);
      interests = [...newArr, title];
    }

    return (
      <>
        <div
          onClick={handleEditClick}
          className="modal_background"
        ></div>

        <div className="modal_main_container">
          <div className="list_container">
            <ul className="modal_col">
              <li onClick={handleAddInterestClick}>App Development</li>
              <li onClick={handleAddInterestClick}>Game Development</li>
              <li onClick={handleAddInterestClick}>Programming</li>
              <li onClick={handleAddInterestClick}>Data Science</li>
            </ul>
            <ul className="modal_col">
              <li onClick={handleAddInterestClick}>Web Development</li>
              <li onClick={handleAddInterestClick}>Data Structures</li>
              <li onClick={handleAddInterestClick}>Machine Learning</li>
              <li onClick={handleAddInterestClick}>Others</li>
            </ul>
          </div>
          <div className="bottom_row">
            <button onClick={handleEditClick} className="btn">
              Cancel
            </button>
            <button className="btn">Save</button>
          </div>
        </div>
      </>
    );
  }
}
