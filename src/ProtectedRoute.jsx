import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "./pages/Loading";

export default function ProtectedRoute({isLoggedIn, setIsLoggedIn}) {
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function authenticate(code) {
      try {
        const response = await fetch(`http://localhost:5152/authenticate/${code}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (response.status === 200) {
          setIsLoggedIn(true);

        } else {
          setIsLoggedIn(false);
        }

      } catch (error) {

        console.log("Erro na autenticação:", error);
        setIsLoggedIn(false);
      }
    }

    authenticate(token);
  }, [token]);

  // Enquanto está carregando a verificação, pode exibir um loading ou nada
  if (isLoggedIn === null) {
    return <Loading />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
