
import "./DisneyEntails.css"
const DisneyEntails =()=>{

    return(
        <>
           <div className= "WhatsBody">
              <div className= "all_what">
                  <h2 id="headW">What&apos;s on Disney+</h2>
                  <div className= "imageM_what">
                        <div className= "imageM1">
                            <div className= "imageM"><img src="../../src/assets/marvel.png"alt="" /></div>
                            <h2 id="mar">The Marvel</h2>
                        </div>
                        <div className= "imageM2">
                            <div className= "imageM"><img src="../../src/assets/iwaju.png"alt="" /></div>
                            <h2 id="iwa">Iwaju</h2>
                        </div>
                        <div className= "imageM3">
                            <div className= "imageM"><img src="../../src/assets/jack.png" alt="" /></div>
                            <h2 id="per">Percy Jackson and Olympians</h2>
                        </div>
                  </div>
                  <div id="logoAll"><img src="../../src/assets/allLogo.png" alt="" /></div>
                  <button id="subW">SUBSCRIBE NOW*</button>
                  <p id="term">* Terms and Conditions Apply | Plans start from just £4.99 a month</p>
             </div>
          </div>

        </>
    )
}

export default DisneyEntails;