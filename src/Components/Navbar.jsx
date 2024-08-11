import { menuList } from '../index';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <a className="navbar-brand" href="#">Eaglespeed</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    {menuList.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <a className="nav-link" href={item.href}>
                                {item.name} {item.name === "Home" ? <span className="sr-only">(current)</span> : null}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
