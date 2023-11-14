//import { useContext } from "react"
import { colorContext } from "../context"
export default function GrandChildComponent(){
    //let color=useContext(colorContext)
    return (
        <colorContext.Consumer>
            {(color)=>{
                console.log(color)
            return <p style={{color: color, textAlign: 'center', fontWeight:'bold'}}>Color:{color}</p>}}
        </colorContext.Consumer>
    )
}