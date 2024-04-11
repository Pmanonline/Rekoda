import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";

import HomeDashBoard from "./pages/DashBoard_pages/MyDashBoard";
import AddSales from "./pages/DashBoard_pages/AddSales";
import LoginScreen from "./pages/login";
import Register from "./pages/register";
import RegisterBusiness from "./pages/RegisterBusiness";
import Home from "./pages/Home";
import Profile from "./pages/profile";

import ProtectedRoute from "./components/routing/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route as the default */}
        <Route path="/" element={<Home />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="/MyDashBoard" element={<HomeDashBoard />} />
            <Route path="/AddSales" element={<AddSales />} />
          </Route>
        </Route>

        {/* Login route */}
        <Route path="login" element={<LoginScreen />} />
        <Route path="Register" element={<Register />} />
        <Route path="RegisterBusiness" element={<RegisterBusiness />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
