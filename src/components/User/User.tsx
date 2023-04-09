import "./User.css";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";

export function User() {
  const [modal, setModal] = useState(false);
  const BLANK_URL = "/logo.png";

  function handleEditClick() {
    setModal(!modal);
    if (modal) {
      document.body.classList.remove("stop-scrolling");
    } else {
      document.body.classList.add("stop-scrolling");
    }
  }

  return (
    <>
      <div className={"container-user"}>
        <div className={"userimg_container"}>
          <img src={BLANK_URL} className={"userimg"} />
          <button onClick={handleEditClick} className={"edit_btn"}>
            <EditOutlined  className={"edit_icon"} size={12} />
          </button>
        </div>
        <div className={"userinfo_container"}>
          <p>Hello,</p>
          <h2>Cipher Schools</h2>
          <p>cipherschools@email.com</p>
        </div>
      </div>
      {modal && <EditProfileModal />}
    </>
  );

  function EditProfileModal() {
    const [img, setImg] = useState<ImgState>({
      preview: BLANK_URL,
      file: null,
    });

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
      const imgFile = e.target.files![0];
      if (!imgFile) return;
      const preiewUrl = URL.createObjectURL(imgFile);
      setImg({ preview: preiewUrl, file: imgFile });
    }

    return (
      <>
        <div
          onClick={handleEditClick}
          className={"modal_background-user"}
        ></div>
        <form className={"modal_form-user"}>
          <h4>Profile Update</h4>
          <div className={"content"}>
            <div className={`${"userimg_container"}`}>
              <img src={img.preview} className={"userimg_big"} />
              <input
                type="file"
                name="file"
                accept="image/png, image/jpg, image/jpeg"
                id="file-input"
                onChange={handleImageChange}
                className={"file_input"}
              />
              <label
                htmlFor="file-input"
                className={`${"edit_btn"} ${"edit_btn_big"}`}
              >
                <EditOutlined className={"edit_icon"} size={17} />
              </label>
            </div>
            <ul className={"input_container"}>
              <li>
                <p>First Name</p>
                <input placeholder="First Name" />
              </li>
              <li>
                <p>Last Name</p>
                <input placeholder="Last Name" />
              </li>
              <li>
                <p>Email Address</p>
                <input placeholder="Email Address" />
              </li>
              <li>
                <p>Mobile Number</p>
                <input placeholder="Mobile Number" />
              </li>
            </ul>
          </div>
          <div className={"btn_row"}>
            <button onClick={handleEditClick}>Cancel</button>
            <button>Save</button>
          </div>
        </form>
      </>
    );
  }
}

interface ImgState {
  file: File | null;
  preview: string;
}
