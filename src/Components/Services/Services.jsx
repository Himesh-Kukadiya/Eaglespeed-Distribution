import { serviceList } from '../../index'; 

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="row">
                    {serviceList.map((service, index) => (
                        <div className="col-lg-4 col-md-6 service-card" key={index}>
                            <div className="service-icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.name}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
