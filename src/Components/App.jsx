import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import CoffeeControl from "./CoffeeControl";
import Footer from "./Footer";
import "../Styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <CoffeeControl />
      <Footer />
    </>
  );
}

export default App;
