import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './App.css';
import About from './Components/About';
import ProductList from './Components/Prduct/PrductList';

const App = () => {
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <ProductList />
      </>
    );
};

export default App;
