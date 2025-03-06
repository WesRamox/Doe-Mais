import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import image from "../../assets/team2.svg";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bloodType: ""
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
      <div className="left w-1/3 flex items-center justify-center">
        <img src={image} alt="" />
      </div>
      <div className="right  w-1/3 flex flex-col p-8 gap-3 items-center justify-center">
        <form
          className="bg-red-200 flex flex-col gap-5 w-full max-w-[500px] max-h-[600px] p-10"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl text-zinc-700">
            Crie sua conta{" "}
            <span className="text-red-600 text-xl">
              Doe+
            </span>
          </h1>
          <TextField
            type="text"
            name="name"
            placeholder="Nome"
            size="small"
            className="bg-red-300"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
          <div className="password flex items-center gap-3">
            <TextField
              type="password"
              name="password"
              placeholder="Senha"
              className="bg-red-300 w-full"
              size="small"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <TextField
              type="password"
              name="confirmPassword"
              placeholder="Confirme sua senha"
              className="bg-red-300 w-full"
              size="small"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel id="label-sangue">
              Tipo sanguineo:
            </InputLabel>
            <Select
              size="small"
              variant="outlined"
              className="bg-red-300"
              labelId="label-sangue"
              name="bloodType"
              value={formData.bloodType}
              onSelect={handleChange}
            >
              <MenuItem value="a+">A+</MenuItem>
              <MenuItem value="a-">A-</MenuItem>
              <MenuItem value="o+">O+</MenuItem>
              <MenuItem value="o-">O-</MenuItem>
              <MenuItem value="b+">B+</MenuItem>
              <MenuItem value="b-">B-</MenuItem>
              <MenuItem value="ab+">AB+</MenuItem>
              <MenuItem value="ab-">AB-</MenuItem>
            </Select>
          </div>
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
