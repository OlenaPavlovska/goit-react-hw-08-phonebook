import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk("auth/register", async (user, thunkApi) => {
    try {
        const { data } = await axios.post("/users/signup", user) 
        token.set(data.token) 
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
}
)

export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
    try {
        const { data } = await axios.post("/users/login", user) 
        token.set(data.token) 
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
}
)

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  const state = thunkApi.getState()
    const persistedToken = state.auth.token
    if (!persistedToken) {
      return thunkApi.rejectWithValue()
    }
  try {
        token.set(persistedToken)
        const { data } = await axios.get("/users/current") 
         
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
}
)

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
    try {
         await axios.post('/users/logout');
    
    clearAuthHeader();
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
}
)