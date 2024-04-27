import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "@/env";
import Cookies from "js-cookie";
import { useRouter } from "next/router"; // Importar el hook useRouter de Next.js

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

      Cookies.set("jwt", data.tokenSession, { expires: 1 });

      return data;
    } catch (error) {
      throw new Error("Error al iniciar sesión");
    }
  }
);

const LoginAdminSlice = createSlice({
  name: "loginAdmin",
  initialState: {
    data: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLoginAdminPost.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchLoginAdminPost.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchLoginAdminPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default LoginAdminSlice.reducer;
