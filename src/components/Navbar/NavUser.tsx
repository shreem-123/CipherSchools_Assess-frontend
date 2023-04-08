import './NavUser.css'

export function NavUser() {
    const BLANK_URL =
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
  
    return (
      <div className="user_container">
        <img src={BLANK_URL} />
      </div>
    );
  }