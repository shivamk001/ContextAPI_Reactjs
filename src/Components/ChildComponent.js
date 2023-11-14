import GrandChildComponent from "./GrandChildComponent"

export default function ChildComponent(){

    return (
        <div style={{border:"5px solid black"}}>
        <GrandChildComponent/>
        </div>
    )
}