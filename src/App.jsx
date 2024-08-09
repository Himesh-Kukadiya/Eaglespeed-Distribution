import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './App.css';
import About from './Components/About';
import ProductList from './Components/Prduct/PrductList';
import Services from './Components/Services/Services';

const App = () => {
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <ProductList />
        <Services />
      </>
    );
};

export default App;
