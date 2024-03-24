
import Marvel from "../../assets/marvel.png"
import Iwaju from "../../assets/iwaju.png"
import Jack from "../../assets/jack.png"
import WhatsDisney from "./WhatsDisney"
import "./WhatsEachDisney.css"

const WhatsEachDisney =()=>{

    const eachW =[

        {
            id:"mar",
            imageM:Marvel,
            title:"The Marvels"
        },
        {
            id:"iwa",
            imageM:Iwaju,
            title:"Iwaju"
        },
        {
            id:"jac",
            imageM:Jack,
            title:"Percy Jackson and Olympians"
        }
    ]
    return(
        <>
           <div className= "whatsDisneyEach">
                {
                    eachW.map((val)=>{
                    <WhatsDisney
                    image = {val.imageM}
                    title = {val.title}
                    key={val.id}>

                    </WhatsDisney>
                    })
                }
           </div>
        </>
    )
}

export default WhatsEachDisney;