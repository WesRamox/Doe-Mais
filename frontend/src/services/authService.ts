export interface SignUpData {
  name: string;
  email: string;
  password: string;
  bloodtype: string;
}

export const registerUser = async (formData: SignUpData) => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        "Erro ao enviar formulário:",
        errorData
      );
      return errorData;
    }

    const responseData = await response.json();

    return responseData
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}