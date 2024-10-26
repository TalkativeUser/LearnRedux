import { memo, useEffect } from "react";
import Button from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { increment } from "../app/AllSlices/counterSlice";

function Counter() {
  
const {counter,text}=useSelector( (store:RootState)=> store.counter )
const dispatch=useDispatch()

useEffect(()=>{

  
},[])
  return (
    <div>
      <h3> my counter : {counter} </h3>
      <div className=" mb-10 ">
        <Button onClick={()=>{dispatch(increment(1))}}  className=" hover:bg-yellow-600 py-1.5 px-4 rounded-lg hover:text-white border border-yellow-600 ">
       
         {text}
        </Button>
      </div>
    </div>
  );
}

export default memo(Counter);
