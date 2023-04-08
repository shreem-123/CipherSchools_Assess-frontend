import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FollowersPage } from "./Pages/FollowersPage";
import { HomePage } from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="followers" element={<FollowersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
