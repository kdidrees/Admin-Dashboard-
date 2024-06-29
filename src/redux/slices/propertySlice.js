// redux/slices/propertySlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;

// action to create a new property
export const createProperty = createAsyncThunk(
  "property/createProperty",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://192.168.1.77:4000/api/properties/create-property",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      // Return a serializable error object
      return rejectWithValue({
        message: error.message,
        data: error.response ? error.response.data : null,
      });
    }
  }
);

// action to fetch all properties

export const fetchAllProperties = createAsyncThunk(
  "property/fetchAllProperties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://192.168.1.77:4000/api/properties/all"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// get property by id

export const getPropertyById = createAsyncThunk(
  "property/editProperty",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://192.168.1.77:4000/api/properties/getpropertybyid/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState: {
    properties: [],
    property: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProperty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProperty.fulfilled, (state, action) => {
        state.loading = false;
        state.properties.push(action.payload.property);
      })
      .addCase(createProperty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllProperties.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload;
      })
      .addCase(fetchAllProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPropertyById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPropertyById.fulfilled, (state, action) => {
        state.loading = false;
        state.property = action.payload;
      })
      .addCase(getPropertyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default propertySlice.reducer;
