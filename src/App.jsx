import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles, Wrapper } from "./styles/globalStyles";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import UploadImage from "./pages/UploadImage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadImage />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
