
import "./Park.css"
const Park =(props)=>{

    return(
        <>
           <div className= "distributeP">
                <div className= "distributeEachP">

                    <div className= "image_sectorP"> <img src={props.imageP} alt="" id="imageP"/></div>

                    <div className= "wording_areaP">
                        <h2 id="headingsP">{props.headingsP}</h2>
                        <p id="wordingsP">{props.wordingsP}</p>
                        <h3 id="bottomP">{props.bottomP}</h3>

                    </div>


                </div>

           </div>
        </>
    )
}

export default Park;