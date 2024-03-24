
import "./Nav.css"
import Logo from "../../assets/disneyLogo.png"


let Nav =()=>{

    return(
        <>
           <div className= "nav">
                     <div><a href="#"><img src={Logo} alt="" /></a></div>
                     <div className= "navigates">
                          <div><a href="#">DISNEY+</a></div>
                          <div><a href="#">SHOP</a></div>
                          <div><a href="#">MOVIES</a></div>
                          <div><a href="#">SHOWS</a></div>
                          <div><a href="#">PARKS</a></div>
                     </div>

           </div>
        </>
    )
}

export default Nav;