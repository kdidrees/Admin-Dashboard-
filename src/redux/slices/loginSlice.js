import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;

// action for user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (logindata, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        logindata
      );
      // Only return the data you need, exclude non-serializable parts

      if (response.status === 200) {
        window.location.href = "/";
      }

      console.log(response.data);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// action to fetch user details

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:4000/api/auth/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


// logout actoin here 


export const logoutUser = createAsyncThunk(
    "user/logoutUser",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("http://localhost:4000/api/auth/logout");
        if (response.data === "success") {
          return "success";
        } else {
          throw new Error("Logout failed");
        }
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false; 
        state.userInfo = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.userInfo = null; // Clear user info on successful logout
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
