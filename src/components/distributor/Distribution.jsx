
import Mary from "../../assets/magicians.jpeg"
import Backing from "../../assets/fatherbacking.jpeg"
import Porting from "../../assets/disneyPort.jpeg"
import Cartoons from "../../assets/threecharact.jpeg"
import Dist from "./Dist"
import "./Distribution.css"

const Distribution =()=>{

    const allDist =[
        {
            id :"may",
            image:Mary,
            headings:"Mary Poppins the Musical UK & Ireland tour",
            wordings:"Someone magical is returning. The classic multi award-winning musical will embark on a tour from November.Book your tickets now ",
            bottom :"SHOWS"

        },
        {
            id :"bac",
            image:Backing,
            headings:"Price example ₤147*/Person/Night",
            wordings:"Price example based on 2 adult & 2 kids booking a Disney Hotel Cheyenne & Ticket Package for 3 nights/4 day ticket. Selected arrivals between 24 july-31 August 2024.",
            bottom :"DISNEYLAND &reg; PARIS"

        },
        {
            id :"pot",
            image:Porting,
            headings:"Big Eurostar Savings!",
            wordings:"Enjoy a ₤50/person discount on all our Disneyland Paris Eurostar packages when you book by 2nd April 2024, for arrivals 1st July 2014-30th September 2024. ",
            bottom :"DISNEYLAND '&reg;' PARIS"

        },
        {
            id :"car",
            image:Cartoons,
            headings:"Playtime Spectacular",
            wordings:"The ultimate destination for the most wished for toys, soft toys and more",
            bottom :"SHOP"

        }
    ]

    return(

        <>
           <div className= "distributed">
               {
                allDist.map((values)=>(
                    <Dist  key = {values.id}
                    image = {values.image}
                    headings = {values.headings}
                    wordings ={values.wordings}
                    bottom={values.bottom}>
                    </Dist>
                ))
               }
           </div>
        </>
    )
}

export default Distribution;