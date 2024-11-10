import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Top from "./components/Top.tsx";
import { Header } from "./components/Header.tsx";
import Footer from "./components/Footer";
import About from "./components/About.tsx";
import Backnumber from "./components/Backnumber.tsx";
import Contact from "./components/Contact.tsx";
import Install from "./components/Install.tsx";
import Article from "./components/Article.tsx";
import Articles from "./components/Articles.tsx";
import NotFound from "./components/NotFound.tsx";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Top />} />

          <Route path="/about" element={<About />} />
          <Route path="/backnumber" element={<Backnumber />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/install" element={<Install />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/article/:id" element={<Article />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
