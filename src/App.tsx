
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
// import Contact from "./page/Contact";
import MainLayout from "./layouts/mainLayout";

function App() {
  return (
    <Routes>

      {/* Layout principal */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
      </Route>

    </Routes>
  );
}

export default App;