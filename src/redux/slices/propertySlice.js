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
        "http://localhost:4000/api/properties/create-property",
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
        "http://localhost:4000/api/properties/all"
      );
      return response.data.properties;
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
        `http://localhost:4000/api/properties/getpropertybyid/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// update the property by id
export const updatePropertyById = createAsyncThunk(
  "property/updatePropertyById",
  async ({ id, updatedData }, { rejectWithValue }) => {
    console.log(updatedData, "kd updated here");

    try {
      const response = await axios.put(
        `http://localhost:4000/api/properties/edit-property/${id}`,
        updatedData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// delete property by id
export const deletePropertyById = createAsyncThunk(
  "property/deletePropertyById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/properties/delete-property/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
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
      })
      .addCase(updatePropertyById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePropertyById.fulfilled, (state, action) => {
        state.loading = false;
        state.property = action.payload;
      })
      .addCase(updatePropertyById.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      })
      .addCase(deletePropertyById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePropertyById.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = state.properties.filter(
          (property) => property._id !== action.payload.id
        );
      })
      .addCase(deletePropertyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.id;
      });
  },
});

export default propertySlice.reducer;
