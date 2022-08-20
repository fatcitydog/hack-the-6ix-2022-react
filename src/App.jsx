import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/globalStyles";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import UploadImage from "./pages/UploadImage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadImage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
