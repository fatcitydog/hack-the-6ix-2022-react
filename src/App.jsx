import { BrowserRouter, Routes, Route } from "react-router-dom";
import WalletConnect from "./components/layout/WalletConnect";
import { GlobalStyles } from "./styles/globalStyles";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/walletconnect" element={<WalletConnect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
