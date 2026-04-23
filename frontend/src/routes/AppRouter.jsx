import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contacts from "../pages/Сontacts";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
