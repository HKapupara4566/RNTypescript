import { createSlice } from '@reduxjs/toolkit'
import { fetchProductsAction, IUserDataResponse } from '../action/fetchProductAction'


export interface IProductState{
    isLoading: boolean
    products: IUserDataResponse,
    error: string
}

const initialState: IProductState = {
  isLoading: false,
  products: {
    limit: 0,
    skip: 0,
    total: 0,
    users: []
  },
  error: ""
}

const FETCH_PRODUCT_SLICE = 'fetchproductSlice'

const fetchproductSlice = createSlice({
  name: FETCH_PRODUCT_SLICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
       state.products = action.payload
       state.isLoading = false
      })
      .addCase(fetchProductsAction.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Something went wrong'
      })
  },
})


export const fetchProductSliceReducer = fetchproductSlice.reducer
