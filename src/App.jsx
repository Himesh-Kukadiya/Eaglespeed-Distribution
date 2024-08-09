import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import ProductList from './Components/Prduct/PrductList';
import Services from './Components/Services/Services';
import Testimonials from './Components/Services/TestimonialsList';
import Contact from './Components/Contact';
import Footer from './Components/Services/Footer';

const App = () => {
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <ProductList />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </>
    );
};

export default App;
