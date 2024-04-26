import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "@/env";
import Cookies from "js-cookie";
import { useRouter } from "next/router"; // Importar el hook useRouter de Next.js

// Acción asincrónica para iniciar sesión
export const fetchLoginAdminPost = createAsyncThunk(
  "loginAdmin/fetchLoginAdmin",
  async ({ username, password }) => {
    try {
      const response = await fetch(`${HOST}/dashboard/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }

      const data = await response.json();
      // Guardar el token JWT en una cookie llamada 'jwt'
      Cookies.set("jwt", data.token, { expires: 1 }); // La cookie expira en 7 días

      return data;
    } catch (error) {
      throw new Error("Error al iniciar sesión");
    }
  }
);

// Slice de Redux para el estado de autenticación
const LoginAdminSlice = createSlice({
  name: "auth",
  reducers: {
    // Reducers adicionales, si los hay
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        // Lógica después de un inicio de sesión exitoso
        const router = useRouter();
        router.push("/dashboardSign/dashboardHome"); // Redirigir a la página de dashboard después de iniciar sesión exitosamente
      })
      .addCase(loginUser.rejected, (state, action) => {
        // Lógica después de un inicio de sesión fallido
      });
  },
});

export default LoginAdminSlice.reducer;
