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
                            <p>
                                At Eaglespeed Distribution, we are passionate about providing our customers with the freshest produce and high-quality grocery items. Our team works diligently to source products from trusted local farms and suppliers, ensuring that every item meets our strict quality standards. We offer a wide variety of products, including organic and specialty foods, to cater to the diverse needs of our customers.
                            </p>
                            <p >Eaglespeed Distribution is a leading provider of grocery and produce supplies,
                                committed to delivering fresh, high-quality products to our customers.Our mission is to support local businesses and communities by offering a wide selection of fresh
                                produce, grocery items, and specialty foods at competitive prices. We prioritize sustainability
                                and work closely with local farmers and suppliers to ensure the best products reach your
                                shelves.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About