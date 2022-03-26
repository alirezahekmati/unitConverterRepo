import { useEffect, useRef, useState } from "react"


function useConverter(ratio){
    const ref =useRef(null)
    const [text,setText]=useState("")
    console.log(text)
    useEffect(()=>{
        function onChangeFunc(e){ 
            setText(e.target.value * ratio)
        }
        ref.current.addEventListener("change",onChangeFunc)

        return ()=>{
            ref.current.removeEventListener("change",onChangeFunc)
        }
    },[])
    return [text,ref]
}

export default useConverter