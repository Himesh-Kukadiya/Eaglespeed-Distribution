import { testimonialsList } from '../../index'; 

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <h2 className="section-title">What Our Clients Say</h2>
                <div id="testimonialCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
                    <div className="carousel-inner">
                        {testimonialsList.reduce((acc, client, index) => {
                            if (index % 3 === 0) {
                                acc.push([]); 
                            }
                            acc[acc.length - 1].push(
                                <div className="col-md-4" key={index}>
                                    <div className="testimonial-card">
                                        <p className="testimonial-text">{client.text}</p>
                                        <h5 className="client-name">- {client.name}</h5>
                                    </div>
                                </div>
                            );
                            return acc;
                        }, []).map((row, rowIndex) => (
                            <div className={`carousel-item ${rowIndex === 0 ? 'active' : ''}`} key={rowIndex}>
                                <div className="row">
                                    {row}
                                </div>
                            </div>
                        ))}
                    </div>
                    <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
