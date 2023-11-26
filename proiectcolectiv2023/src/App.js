import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import RestaurantList from "./components/RestaurantList/RestaurantList";
import ChangePasswordPage from "./components/ChangePasswordPage/ChangePasswordPage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurant-list" element={<RestaurantList />} />
        <Route path="/change-password" element={<ChangePasswordPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>


      </Routes>
    </Router>
  );
}

export default App;
