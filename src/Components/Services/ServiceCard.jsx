import PropTypes from 'prop-types';

const ServiceCard = (props) => {
    return (
        <div className="col-lg-4 col-md-6 service-card">
            <div className="service-icon">
                <i className={props.icon}></i>
            </div>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </div>
    );
}

// PropTypes validation
ServiceCard.propTypes = {
    icon: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,  
    desc: PropTypes.string.isRequired,  
};

export default ServiceCard;