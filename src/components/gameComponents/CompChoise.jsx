import { Rock } from "./Rock"
import { Scissors } from "./Scissors"
import { Paper } from "./Paper"



const CompChoise = ()=>{

    const components = [<Rock/>, <Scissors/>,<Paper/>]
    const randomIndex = Math.floor(Math.random() * components.length);
    const randomComponents = components[randomIndex]
    return (
         <div>
            {randomComponents}
         </div>
    )
}

export {CompChoise}