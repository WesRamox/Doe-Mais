import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-center items-center">
        <Link to="/" className="logo">
          <img src={logo} alt="" className="" />
        </Link>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/items">Sobre nós</Link>
          <Link to="/items">Contato</Link>
        </nav>
        <Link to="/sign-in">Entrar</Link>
        <Link to="/sign-up">Cadastrar</Link>
      </header>
    </>
  );
};

export default Navbar;
