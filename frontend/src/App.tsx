import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./pages/catalogo/Catalogo";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./components/login/Login";
import Usuario from "./components/usuario/Usuario";
import Anotacao from "./components/anotacao/Anotacao";
import CadastroAve from "./pages/cadastroAve/CadastroAve";
import Footer from "./components/footer/Footer";
import Input from "./components/Input/Input";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalogo" element={<Catalogo />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/usuario" element={<Usuario />}></Route>
          <Route path="/anotacao" element={<Anotacao />}></Route>
          <Route path="/cadastroAve" element={<CadastroAve />}></Route>
          <Route path='*' element={<h1>Página não encontrada!</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
