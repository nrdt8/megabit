import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contacts from "../pages/Сontacts";
import Admin from "../pages/Admin";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
