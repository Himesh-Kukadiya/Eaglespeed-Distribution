import {home} from '../assets';

const Home = () => {
    return (
        <header id="home" className="header">
            <img src={home} alt="Background Image" className="header-image"/>
                <div className="overlay"></div>
                <div className="header-content">
                    <h1 className="display-4 text-light animated fadeInDown">Grocery & Produce Distribution</h1>
                    <p className="lead text-light animated fadeInUp">Providing the freshest and highest quality products</p>
                    <a href="#about" className="btn btn-light btn-lg animated fadeIn">Learn More</a>
                </div>
        </header>
    );
};

export default Home;
