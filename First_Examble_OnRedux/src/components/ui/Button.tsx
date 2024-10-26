import { ButtonHTMLAttributes, memo } from "react";

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 function Button( {children , ...rest}:ButtonHTMLAttributes<HTMLButtonElement> ) {

    console.log("rest=>",rest);
    
  return (
    <div>
              <button {...rest}  > {children} </button>

    </div>
  )
}

export default memo(Button)