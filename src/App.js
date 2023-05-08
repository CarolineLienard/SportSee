import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import User from "./pages/User";

// Here the main app, wrapped in react router
// Header and sidebar are like the layout of the page
// You can  see all the different routes here that render the differents page components
export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Homepage */}
        <Route path="/user/:id" element={<User />} /> {/* User page, that need an ID param */}
        <Route path="*" element={<Error />} /> {/* Error, not found page */}
      </Routes>
    </BrowserRouter>
  );
}
