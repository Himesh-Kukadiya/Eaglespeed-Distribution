import PropTypes from 'prop-types';

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img src={props.img} alt={props.name} className="img-fluid" />
            <h3>{props.name}</h3>
            <p className="description">{props.desc}</p>
            <p className="price">₹{props.price} / {props.unit}</p>
            <a href="#" className="btn btn-dark">Buy Now</a>
        </div>
    );
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
};

export default ProductCard;