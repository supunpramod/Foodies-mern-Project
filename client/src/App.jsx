import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";

// Components
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Chefs from "./components/Chefs.jsx";
import Blog from "./components/Blog.jsx";
import Element from "./components/Element.jsx";
import Contact from "./components/Contact.jsx";
import Booktable from "./components/Booktable.jsx";

// විසඳුම: Named import භාවිතා කරන්න
import  Sidebar  from "./dashboard components/Sidebar.jsx";
import Topbar from "./dashboard components/Topbar.jsx";
import Dashboard from "./dashboard components/Dashboard.jsx";
import FoodMenu from "./dashboard components/Foodmenu.jsx";
import ChefsManage from "./dashboard components/Chefsmanage.jsx";
import TableBooking from "./dashboard components/Tablebooking.jsx";
import BlogManage from "./dashboard components/Blogmanage.jsx";
import Contactshow from "./dashboard components/Contactshow.jsx";

import Register from "./dashboard components/Register.jsx";
import Login from "./dashboard components/Login.jsx";






// Dashboard Layout Component (මෙලෙසම තබන්න)
const DashboardLayout = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar sidebarOpen={sidebarOpen} />
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet /> {/* Nested routes render කරයි */}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        {/* Website Routes (මෙලෙසම තබන්න) */}
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="/about" element={<><Header /><About /><Footer /></>} />
        <Route path="/menu" element={<><Header /><Menu /><Footer /></>} />
        <Route path="/chefs" element={<><Header /><Chefs /><Footer /></>} />
        <Route path="/blog" element={<><Header /><Blog /><Footer /></>} />
        <Route path="/element" element={<><Header /><Element /><Footer /></>} />
        <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
        <Route path="/booktable" element={<Booktable />} />

        {/* Dashboard Routes */}
        <Route 
          element={<DashboardLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/foodmenu" element={<FoodMenu />} />
          <Route path="/chefsmanage" element={< ChefsManage/>} />
          <Route path="/tablebooking" element={< TableBooking/>} />
          <Route path="/blogmanage" element={< BlogManage/>} />
          <Route path="/contactshow" element={<Contactshow />} />
          
        
        


        </Route>

        {/* 404 Page */}
        <Route path="*" element={<div className="text-center text-2xl mt-10">404 - Page Not Found</div>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        


    


      </Routes>
    </BrowserRouter>
  );
}

export default App;
