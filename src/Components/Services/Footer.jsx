import { menuList } from "../../index";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <h5 className="footer-title">Quick Access</h5>
                        <ul className="list-unstyled">
                            {
                                menuList.map(menu => (
                                    <li key={menu.name}><a href={menu.href}>{menu.name}</a></li>
                                ))
                            }
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

export default Footer;
