import './Auth.css'
import image from "../../assets/team.svg"
import { Button, TextField } from "@mui/material";
import { useState } from 'react';

export default function SignIn() {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });
  
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (
      e: React.FormEvent<HTMLFormElement>
    ) => {
      e.preventDefault();
      console.log("Dados do usuário:", formData);
    };

  return (
    <div className="flex items-center justify-center gap-2 h-screen min-h-[600px] bg-red-100">
      <div className="left w-2/7 flex items-center justify-center">
        <img src={image} alt="" />
      </div>
      <div className="right w-2/7 flex flex-col p-8 gap-3 items-center justify-center">
        <form
          className="bg-red-200 flex flex-col gap-5 w-full p-10"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl text-zinc-700">
            Acesse sua conta{" "}
            <span className="text-red-600 text-xl">
              Doe+
            </span>
          </h1>
          <TextField
            type="email"
            name="email"
            placeholder="E-mail"
            size="small"
            className="bg-red-300"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            type="password"
            name="password"
            placeholder="Senha"
            className="bg-red-300"
            size="small"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            className="submit"
            variant="contained"
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}