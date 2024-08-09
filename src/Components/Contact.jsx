import {contact} from '../assets';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={contact} alt="Contact Us" className="img-fluid contact-image" />
                    </div>
                    <div className="col-md-6">
                        <h3>Send Us a Message</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="What's Your Good Name?"
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="What's Your Email Address?"
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="What You Want To Say?"
                                    required></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact