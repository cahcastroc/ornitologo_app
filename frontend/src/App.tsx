import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./pages/catalogo/Catalogo";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import Anotacao from "./pages/anotacao/Anotacao";
import CadastroAve from "./pages/cadastroAve/CadastroAve";
import Footer from "./components/footer/Footer";
import NovaAnotacao from "./pages/novaAnotacao/AnotacoesUsuario";

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
          <Route path="/novaanotacao" element={<NovaAnotacao />}></Route>
          <Route path="/minhasanotacoes" element={<Anotacao />}></Route>
          <Route path="/cadastroave" element={<CadastroAve />}></Route>
          <Route path='*' element={<h1>Página não encontrada!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
