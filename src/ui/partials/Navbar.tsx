import { Link } from "react-router";
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CallIcon from '@mui/icons-material/Call';
import { Button } from "@mui/material";


// Futura Logo
// import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-around items-center w-full bg-red-400 py-5 fixed font-secondary">
        <Link to="/" className="logo">
          <h1 className="text-5xl text-zinc-100 font-semibold">Doe+</h1>
        </Link>
        <nav className="flex gap-10 text-zinc-100">
          <Link to="/" className="link-hover"><HomeIcon /> Inicio</Link>
          <Link to="/items" className="link-hover"><AutoAwesomeIcon/> Sobre nós</Link>
          <Link to="/items" className="link-hover"><CallIcon /> Contato</Link>
        </nav>
        <div className="buttons flex gap-5">
        <Link to="/sign-in">
            <Button
              variant="contained"
              color="primary"
            >
              Entrar
            </Button>
          </Link>
          <Link to="/sign-up">
            <Button
              variant="contained"
              color="secondary"
            >
              Cadastrar
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
