
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="footer-title">Eaglespeed Distribution</h5>
                        <p className="footer-description">At Eaglespeed Distribution, we are passionate about providing our customers with the freshest produce and high-quality grocery items.</p>
                        <p className="footer-description">Our team works diligently to source products from trusted local farms and suppliers, ensuring that every item meets our strict quality standards. We offer a wide variety of products, including organic and specialty foods, to cater to the diverse needs of our customers</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5 className="footer-title">Quick Access</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-end">
                        <h5 className="footer-title">Contact Information</h5>
                        <p>Mobile:  (XXX) XXX-XXXX</p>
                        <p>Email:  info@eaglespeeddistribution.com</p>
                        <p>Address:  [Insert Address]</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p className="footer-copyright">&copy; 2024 Eaglespeed Distribution. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer