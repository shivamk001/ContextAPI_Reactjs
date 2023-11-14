import { useContext } from "react"
import { colorContext } from "../context"
export default function GrandChildComponent(){
    let color=useContext(colorContext)
    return (<p style={{color: color, textAlign: 'center', fontWeight:'bold'}}>Color:{color}</p>)
}