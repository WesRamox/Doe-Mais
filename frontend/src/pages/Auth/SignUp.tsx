import { Button, Input } from "@mui/material";
import { useState } from "react";

export default function SignUp() {
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-4">
        Cadastro no Doe+
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <Input
          type="text"
          name="name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}
