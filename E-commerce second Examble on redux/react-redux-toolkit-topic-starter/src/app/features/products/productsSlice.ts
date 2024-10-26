import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "products",
  tagTypes: ["Products"],

  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
 
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => {
        return {
          url: "/products",
        };
      },
    }),
    getProduct: builder.query({
      query: ({ id }) => {
        return {
          url: `/products/${id}`,
        };
      },
    }),
  
  }),


});

export const { useGetProductListQuery, useGetProductQuery } = productsApiSlice;

// import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { IProduct } from "../../../interface";
// import axiosInstance from "../../../config/axios.config";

// interface ProductState {
//   ProductList: IProduct[];
//   loading:boolean,
//   error:null
// }


//  export const getProductList=createAsyncThunk('products/getProductList',async ( _,thunkAPI )=>{

//   const {rejectWithValue}=thunkAPI


// try {

//    const {data} =await axiosInstance.get("/products?limit=10&select=title,price,thumbnail");
//    return data

  
// } catch (error) {
//   console.log('products api asyncThunk =>',error);
//   return rejectWithValue(error)
  
  
// }

// })


// const initialState: ProductState = {
//   ProductList: [],
//   loading:true,
//   error:null
// };

// const productSlice = createSlice({
//   name: "Products", // ** Attached with Store
//   initialState,
//   reducers: {  },
//   extraReducers:{

//      [`${getProductList.pending}`]:(state)=>{

//         state.loading=true;
//         console.log('loading...');
        

//      }, 
//      [`${getProductList.fulfilled}`]:(state,action)=>{

//         state.loading=false;
//         state.ProductList=action.payload;
//         console.log('fullfiled done ✅ ');
//         console.log('data from asyncThunk =>',action.payload);

        

//      }, 
//      [`${getProductList.rejected}`]:(state,action)=>{

//         state.loading=false;
//         state.ProductList=[]
//         state.error=action.payload
//         console.log('rejected ❌ ');
        

//      }, 


//   }


// });


// export default productSlice.reducer;
