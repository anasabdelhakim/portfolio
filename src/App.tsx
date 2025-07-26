import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Contact } from "./components/Contactus";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/two" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-left" />
    </>
  );
}
