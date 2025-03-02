import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Button } from "@mui/material";


// Futura Logo
// import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-around items-center w-full bg-red-400 py-5 fixed font-secondary z-50">
        <Link to="/" className="logo">
          <h1 className="text-5xl text-zinc-100 font-semibold">Doe+</h1>
        </Link>
        <nav className="flex gap-10 text-zinc-100">
          <Link to="/" className="link-hover"><HomeIcon /> Inicio</Link>
          <Link to="/about" className="link-hover"><AutoAwesomeIcon/> Sobre nós</Link>
          <Link to="/initiative" className="link-hover"><AccessibilityNewIcon /> Iniciativa</Link>
        </nav>
        <div className="buttons flex gap-5">
        <Link to="/signin">
            <Button
              variant="contained"
              color="primary"
            >
              Entrar
            </Button>
          </Link>
          <Link to="/signup">
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
  )
};
