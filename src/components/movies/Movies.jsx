
import "./Movies.css"
const Movies =(props)=>{

    return(
        <>
           <div className= "distributeM">
                <div className= "distributeEachM">

                    <div className= "image_sectorM"> <img src={props.image} alt="" id="imageM"/></div>

                    <div className= "wording_areaM">
                        <h2 id="headingsM">{props.title}</h2>
                       

                    </div>


                </div>

           </div>
        </>
    )
}

export default Movies;