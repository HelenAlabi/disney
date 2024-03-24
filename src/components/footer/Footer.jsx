

import"./Footer.css"
const Footer =()=>{

    return(
        <>
        <div className= "footer-Section">
              <div className= "SMword">
                <h2 id="fol">Follow Disney on:</h2>
              <div className= "SM">
                  <a href=""><img src="../../src/assets/fbk.png" alt="" /></a>
                  <a href=""><img src="../../src/assets/ig.png" alt="" /></a>
                  <a href=""><img src="../../src/assets/twitt.png" alt="" /></a>
                  <a href=""><img src="../../src/assets/youTub.png" alt="" /></a>
              </div>
              </div>
              <div id= "logoF"><img src="../../src/assets/disneyLogo.png" alt="" /></div>
              <div className= "series">
                <p>Help</p>
                <p>Sign Up</p>
                <p>Terms of Use</p>
                <p>UK &EU Privacy Rights</p>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
                <p>Manage Your Cookie Settings</p>
                <p>Interest-based Ads</p>
                <p>Tax Strategy Statement</p>
                <p>Internet Safety</p>
                <p>About Us</p>
              </div>
              <div id="walt"><p>The Walt Disney Company</p></div>
              <div id="dis"><p>© Disney © Disney•Pixar © & ™ Lucasfilm LTD © Marvel. All Rights Reserved</p></div>
        </div>
        </>
    )
}
export default Footer;