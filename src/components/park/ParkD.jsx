
import Castle from "../../assets/disneyCastle.jpeg"
import Boat from "../../assets/boat.png"
import FatherSon from  "../../assets/fatherSon.jpeg"
import Park from "./Park"
import "./ParkD.css"

const ParkD =()=>{

    const allDist =[
        {
            id :"cas",
            imageP:Castle,
            headingsP:"Disneyland Hotel - Now Open!",
            wordingsP:"Book your fairytale stay at the newly reimagined Disneyland Hotel, the ultimate five-star royal residence ",
            bottomP :"DISNEYLAND @PARIS"

        },
        {
            id :"bac",
            imageP:Boat,
            headingsP:"Disney Cruise Line Summer 2024 UK Sailing",
            wordingsP:"Enjoy a magical 3,4 or 5-night UK sailing departing from Southampton to France, Belgium or Spain.",
            bottomP :"DISNEY CRUISE LINE"

        },
       
        {
            id :"fat",
            imageP:FatherSon,
            headingsP:"Free Resort Night & Free Park Days",
            wordingsP:"Enjoy up to 4 nights FREE on yous two-week holiday when you stay in selected Disney Resort hotels in 2024!",
            bottomP :"WALT DISNEY WORLD"

        }
    ]

    return(

        <>
           <h2 id="park">Park</h2>
           <div className= "distributedP">
               {
                allDist.map((values)=>(
                    <Park  key = {values.id}
                    imageP = {values.imageP}
                    headingsP = {values.headingsP}
                    wordingsP ={values.wordingsP}
                    bottomP={values.bottomP}>
                    </Park>
                ))
               }
           </div>
        </>
    )
}

export default ParkD;