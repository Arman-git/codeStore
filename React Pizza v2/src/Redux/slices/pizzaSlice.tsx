import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type FetchPizzasArgs =  Record<string, string>;



type Pizza  = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
  count: number;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>("pizza/fetchPizzasStatus", async (params: FetchPizzasArgs) => {
    const { sortBy, order, category, search, currentPage} = params;
    const { data } = await axios.get<Pizza[]>(
        `https://650d2478a8b42265ec2bbc08.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
  return data;
});
interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
       .addCase(fetchPizzas.pending, (state) => {
          state.status = Status.LOADING;
          state.items = [];
       })
       .addCase(fetchPizzas.fulfilled, (state, action) => {
         state.status = Status.SUCCESS;
         state.items = action.payload;
       })
       .addCase(fetchPizzas.rejected, (state) => {
          state.status = Status.ERROR;
          state.items = [];
       })
 }
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
