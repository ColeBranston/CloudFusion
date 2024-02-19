import Navbar from './Navbar';
import Hero from './Hero';
import Analytics from './Analytics';
import Newsletter from './Newsletter';
import Cards from './Cards';
import Footer from './Footer';
import Box from "./standalone-frontend/support"
import Box from "./standalone-frontend/support"

const HomePage = ({links1, links2, links3}) =>{
    
    return(
        <div className='overflow-auto h-screen bg-white'>
            <Navbar links1 = {links1} links2 = {links2} links3={links3}/>
            <Hero links2 = {links2}/>
            <Analytics links1 = {links1}/>
            <div className='fixed top-[30%] right-0 z-5'>
            <Box/>
            </div>
            <Newsletter />
            <Cards links1 = {links1}/>
            <Footer /> 
        </div>
    );
}
export default HomePage;