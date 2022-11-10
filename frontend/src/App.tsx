import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./components/catalogo/Catalogo";
import Home from "./components/home/Home";
import Cadastro from "./components/cadastro/Cadastro";
import Login from "./components/login/Login";
import Usuario from "./components/usuario/Usuario";
import Anotacao from "./components/anotacao/Anotacao";
import Ave from "./components/ave/Ave";
import Footer from "./components/footer/Footer";

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
          <Route path="/ave" element={<Ave />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
