import './ThemeButton.css';

export function ThemeButton() {
    return (
      <label className="switch">
        <input type="checkbox" />
        <span className={`${"slider"} ${"round"}`}></span>
      </label>
    );
  }