import { about } from "../assets";

const About = () => {
    return (
        <>
            <section id="about" className="about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src={about} width={'100%'}  alt="About Us" className="img-fluid rounded" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="section-title">About Us</h2>
                            <p className="lead">Eaglespeed Distribution is a leading provider of grocery and produce supplies,
                                committed to delivering fresh, high-quality products to our customers. </p>
                            <p>Our mission is to support local businesses and communities by offering a wide selection of fresh
                                produce, grocery items, and specialty foods at competitive prices. We prioritize sustainability
                                and work closely with local farmers and suppliers to ensure the best products reach your
                                shelves.</p>
                            <a href="#contact" className="btn btn-dark">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About