import { createSlice } from "@reduxjs/toolkit";
import propertyData from "../data/property-list-data.json";

const initialState = {
  properties: propertyData?.properties || [], 
  filters: {
    property_type: ""
  },
  currentPage: 1
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers:{
    setFilter(state, action) {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1;
    },
    resetFilters(state) {
      state.filters = { property_type: "" };
      state.currentPage = 1;
    },
    setProperty(state,action){
        state.properties = action.payload;
    },
    setPage(state, action) {
      state.currentPage = action.payload;
    }
  }
});

export const { setFilter, resetFilters, setPage,setProperty } = propertySlice.actions;
export default propertySlice.reducer;
