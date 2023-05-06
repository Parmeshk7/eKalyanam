import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import ProductDetails from "./components/Product/ProductDetails.js"
import About from "./About";
import Mission from "./Mission";
import Donations from "./Donations";
import TempleStore from "./TempleStore";
import OrderPrasad from './OrderPrasad';
import Contact from './Contact';
import Articles from './Articles'
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Header2 from './components/Header2';
import Footer from './components/Footer';

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#ff4d4d",

      bg: "#ffeded",
      footer_bg: "#ea2027;",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/templeStore" element={<TempleStore />} />
        <Route path="/orderPrasad" element={<OrderPrasad />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;