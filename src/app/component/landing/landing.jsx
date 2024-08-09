// landing page server side
import Step from "../Card/step"
import Footer from "../Footer/footer"
import Navbardesign from "../Navbar/Navbar"
import Progressbar from "../Progessbar/Progressbar"
import Content from "../content/content"
import Message from "../content/message"

export default function Landing(){
    return(
        <>   
     <Navbardesign/>
<Progressbar/>
    <Content/>
    <Message/>
    <Step/>
    <Footer/>
        </>
    )
}   