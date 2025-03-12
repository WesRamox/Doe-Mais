import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";

interface User {
  id: string;
  name: string;
  email: string;
  bloodtype: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  bloodtype: string;
}

interface AuthContextType {
  user: User | null;
  error: string | null;
  registerUser: (
    userData: RegisterData
  ) => Promise<{ message: string }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<
  AuthContextType | undefined
>(undefined);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(
    null
  );
  const [error, setError] = useState<
    string | null
  >(null);

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setUser(data.user);
      setError(null); // Limpa o erro, caso haja
    },
    onError: (err: unknown) => {
      setError(
        "Erro ao registrar usuário. Tente novamente."
      );
      console.error(err);
    },
  });

  const registerUser = (
    userData: RegisterData
  ): Promise<{ message: string }> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(userData, {
        onSuccess: (data) => {
          setUser(data.user);
          setError(null);
          resolve({
            message:
              "Cadastro realizado com sucesso!",
          });
        },
        onError: (err) => {
          setError(
            "Erro ao registrar usuário. Tente novamente. \n" +
              err
          );
          reject(
            new Error(
              "Erro ao registrar usuário."
            )
          );
        },
      });
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        registerUser,
        logout,
        isLoading: mutation.status === "pending", // Verifica se o status é 'pending' (em andamento)
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para acessar o contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuth deve ser usado dentro de um AuthProvider"
    );
  }
  return context;
};
