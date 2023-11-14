import { colorContext } from "../context"
import ChildComponent from "./ChildComponent"
const { useState } = require("react")

export default function ParentComponent(){
    let [color, setColor]=useState('#000000')
    //console.log(color)
    return (
        <>
        <h1>Pick a Color:</h1>
        <input type="color" onChange={(e)=>{setColor(e.target.value)}}></input>
        <colorContext.Provider value={color}>
            <ChildComponent/>
        </colorContext.Provider>
        
        </>
    )
}