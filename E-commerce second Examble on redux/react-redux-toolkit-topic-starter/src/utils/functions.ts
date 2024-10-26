// import { IProduct } from "../interface";

// export const addItemToShoppingCart = (
//   cartItems: IProduct[],
//   product: IProduct
// ) => {
//   const exists = cartItems.find((item) => item.id === product.id);
//   console.log(exists);

//   if (exists) {
//     return cartItems.map((item) =>
//       item.id === product.id ? { ...item, qty: item.quntity + 1 } : item
//     );
//   }

//   return [...cartItems, { ...product, qty: 1 }];
// };


import { IProduct } from "../interface";


export function addItemToShoppingCart ( cartItems: IProduct[] ,productAddedNow:IProduct ) {


  const productAddedIsFined=cartItems.find(item => item.id ===productAddedNow?.id)
console.log("productAddedIsFined =>" ,productAddedIsFined);

if(productAddedIsFined) {

 return cartItems.map(item => (item.id === productAddedNow.id?{...item,quntity:item.quntity+1}:item) )

}

return [...cartItems,{...productAddedNow,quntity:1}]


}

