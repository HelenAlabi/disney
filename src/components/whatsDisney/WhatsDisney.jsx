
import AllOgo from "../../assets/allLogo.png"
import "./WhatsDisney.css"
const WhatsDisney =(imageM, title)=>{

    return(
        <>
          <div className= "WhatsBody">
              <div className= "all_what">
                  <h2>What&apos;s on Disney+</h2>
                  <div className= "imageM_what">
                     <div className= "imageM"><img src={imageM} alt="" /></div>
                     <h2>{title}</h2>
                  </div>
                  <div><img src={AllOgo} alt="" /></div>
                  <button id="subW">SUBSCRIBE NOW*</button>
                  <p>* Terms and Conditions Apply | Plans start from just £4.99 a month</p>
             </div>
          </div>
        </>
    )
}

export default WhatsDisney;