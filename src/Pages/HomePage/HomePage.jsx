import Navbar from './Navbar';
import Hero from './Hero';
import Analytics from './Analytics';
import Newsletter from './Newsletter';
import Cards from './Cards';
import Footer from './Footer';

const HomePage = ({links}) =>{
    
    return(
        <>
            <Navbar links = {links}/>
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
            <Footer /> 
        </>
    );
}
export default HomePage;