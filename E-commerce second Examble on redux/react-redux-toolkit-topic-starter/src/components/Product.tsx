// import { useParams } from "react-router-dom";
// import { useGetProductQuery } from "../app/features/products/productsSlice";
// import { useSelector } from "react-redux";
// import { cartSelector } from "../app/features/cart/cartSlice";

// function Product() {
//   const { id } = useParams();
//   const { isLoading, data } = useGetProductQuery({ id });
//   const { cartItems } = useSelector(cartSelector);
// console.log("cartItems => ",cartItems);

  
//   if (isLoading) return <h3>Loading...</h3>;

//   return (
//     <div className="flex gap-8">
//       <div>
//         <img src={data.thumbnail} />
//       </div>
//       <div className="space-y-2">
//         <h2 className="text-3xl font-semibold">{data.title}</h2>
//         <p className="text-lg">{data.description}</p>
//         <p className="text-xl font-bold">${data.price}</p>
//         <p className="text-xl font-bold">$quntity  {cartItems[0].quntity}</p>
//       </div>
//     </div>
//   );
// }

// export default Product;
