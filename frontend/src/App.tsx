import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Botao from "./components/botao/Botao";
import Input from "./components/Input/Input";

function App() {
  return (
    <>
      <Navbar />
      <Botao />
      <Footer />
      <Input placeholder="senha" type="password"  />
    </>
  );
}

export default App;
