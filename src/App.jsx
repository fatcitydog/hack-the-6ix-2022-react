import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles, Wrapper } from "./styles/globalStyles";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import UploadImage from "./pages/UploadImage";
import NFTDashboard from "./pages/NFTDashboard";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadImage />} />
          <Route path="/dashboard" element={<NFTDashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
