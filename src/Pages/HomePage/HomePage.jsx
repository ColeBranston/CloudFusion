import Navbar from './Navbar';
import Hero from './Hero';
import Analytics from './Analytics';
import Newsletter from './Newsletter';
import Cards from './Cards';
import Footer from './Footer';

const HomePage = ({links1, links2}) =>{
    
    return(
        <>
            <Navbar links1 = {links1} links2 = {links2} />
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
            <Footer /> 
        </>
    );
}
export default HomePage;