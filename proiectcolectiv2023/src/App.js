import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import RestaurantList from "./components/RestaurantList/RestaurantList";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurant-list" element={<RestaurantList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
