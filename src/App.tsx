import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/one" element={<h1>wadaw</h1>} />
          <Route path="/two" element={<h1>wadaw</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
