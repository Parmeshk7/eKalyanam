import {React, useState, useEffect} from 'react'
import axios from "axios";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import WebFont from "webfontloader";
import ProductDetails from "./components/Product/ProductDetails.js"
import PrasadDetails from "./components/Product/PrasadDetails";
import About from "./About";
import Mission from "./Mission";
import Donations from "./Donations";
import TempleStore from "./TempleStore";
import OrderPrasad from './OrderPrasad';
import Contact from './Contact';
import Articles from './Articles'
import Cart from "./components/Cart/Cart";
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Header2 from './components/Header2';
import Footer from './components/Footer';
import Login from './components/User/LoginSignUp';
import Shipping from "./components/Cart/Shipping";
import store from './store';
import { loadUser } from './actions/userAction';
import ForgotPassword from './components/User/ForgotPassword';
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Payment from "./components/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './components/Route/ProtectedRoute';
import OrderSuccess from './components/Cart/OrderSuccess';
import MyOrders from './components/Order/MyOrders';
import OrderDetails from './components/Order/OrderDetails';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/User/Profile';
import ProductList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';
import UpdateProduct from './components/admin/UpdateProduct';

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
      btn: "#FF4D4D",
      border: "tomato",
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

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Header2 />

      {(
        <Elements stripe={loadStripe(stripeApiKey)}>
           

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/prasad/:id" element={<PrasadDetails/>} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/templeStore" element={<TempleStore />} />
        <Route path="/orderPrasad" element={<OrderPrasad />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/process/payment" element ={<Payment />} />
        <Route path="/success" element ={<OrderSuccess />} />
        <Route path="/orders" element ={<MyOrders />} />
        <Route path="/order/:id" element ={<OrderDetails />} />
        <Route path='/admin/dashboard' element={ <Dashboard />} />
        <Route path='/me' element={ <Profile />} />
        <Route path='/admin/products' element={ <ProductList />} />
        <Route path='/admin/product' element={ <NewProduct />} />
        <Route path='/admin/product/:id' element={ <UpdateProduct />} />


      
      </Routes>

      </Elements>
        )}
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;