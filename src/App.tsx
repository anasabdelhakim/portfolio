import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Toaster } from "sonner";
import Contactus from "./pages/Contactus";
import ScrollToTop from "./hook/Scrollup";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contactus />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-left" />
    </>
  );
}
