import Navbar from './Navbar';
import Hero from './Hero';
import Analytics from './Analytics';
import Newsletter from './Newsletter';
import Cards from './Cards';
import Footer from './Footer';
import Box from "./standalone-frontend/support"

const HomePage = () =>{
    
    return(
        <div className='overflow-auto h-screen bg-white'>
            <Navbar/>
            <Hero/>
            <Analytics/>
            <div className='fixed top-[30%] right-0 z-5'>
            <Box/>
            </div>
                <Newsletter />
                <Cards />
                <Footer /> 
        </div>
    );
}
export default HomePage;