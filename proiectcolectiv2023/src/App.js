import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import RestaurantList from "./components/RestaurantList/RestaurantList";
import Profile from "./components/Profile/Profile";
import ChangePasswordPage from "./components/ChangePasswordPage/ChangePasswordPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import AboutUsPage from './components/AboutUs/AboutUsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurant-list" element={<RestaurantList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePasswordPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<RegisterPage/>}/>
        <Route path="/about-us" element={<AboutUsPage/>}/>


      </Routes>
    </Router>
  );
}

export default App;
