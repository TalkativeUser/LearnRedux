import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface";
// import { addItemToShoppingCart } from "../../../utils/functions";
import { RootState } from "../../store";
import { addItemToShoppingCart } from "../../../utils/functions";

interface CartState {
  cartItems: IProduct[];
}

// const [counter, setCounter] = useState(0)
const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart", // ** Attached with Store
  initialState,
  reducers: {
    addItemToCartAction: (prevState:CartState,newState:PayloadAction<IProduct>)=>{

      prevState.cartItems= addItemToShoppingCart(prevState.cartItems, newState.payload);
      console.log("prevState.cartItems=>",prevState.cartItems);
      

    },
  },
});

export const { addItemToCartAction } = cartSlice.actions;
export const cartSelector = ({ cart }: RootState) => cart;

export default cartSlice.reducer;
