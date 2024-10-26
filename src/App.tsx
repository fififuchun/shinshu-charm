import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Top from "./components/Top.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Install from "./components/Install.tsx";
import Article from "./components/Article.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Top />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/install" element={<Install />} />
          <Route path="/article" element={<Article />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
