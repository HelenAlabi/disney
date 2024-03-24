import StarWar from "../../assets/starWar.png"
import InsideOut from "../../assets/insideOut.png"
import Soul  from "../../assets/soul.jpeg"

import Movies from "./Movies"
import "./MoviesE.css"

const MoviesE =()=>{

    const allDist =[
        {
            id :"may",
            image:StarWar,
            title:"Star Wars: The Phantom Menace(Episode1)",
          

        },
        {
            id :"bac",
            image:InsideOut,
            title:"Inside Out2",
           

        },
        {
            id :"pot",
            image:Soul,
            title:"Soul",
         

        }
    ]

    return(

        <>
            <div className= "MoviesSectorS">
                  <h2 id="movies">Movies</h2>
                  <div className= "distributedM">
                       { 
                          allDist.map((values)=>(
                          <Movies  key = {values.id}
                          image = {values.image}
                          title = {values.title}>
                         </Movies>
                         ))
                        }
                   </div>
            </div>
        </>
    )
}

export default MoviesE;