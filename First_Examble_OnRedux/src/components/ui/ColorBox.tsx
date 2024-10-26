import { memo } from "react"

interface IProps {

    colorOPJ:{

        backgroundColor:string,
        color:string
    }
   

}



const ColorBox=({colorOPJ}:IProps) =>{
  return (
    <div className="flex items-center justify-center w-20 h-20 rounded-md " style={colorOPJ}  >
             <h2>ColorBox</h2>
    </div>
  )
}

export default memo(ColorBox)