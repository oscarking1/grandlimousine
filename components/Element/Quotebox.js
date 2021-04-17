import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Quotebox extends Component {
    render() {
        return (
            <section className="section-full quote-contact-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card heading text-center custom-btn">
                                    <h4>Top Locations & Services Grand Limousine Locations close to you</h4>
                                    <p>Book a chauffeur-driven car service for your next business or leisure luxury airport transfer. Click to get a quote.</p>
                                    <a href="/contact-us/"> Get a Quote </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card heading text-center custom-btn">
                                    <h4>Guaranteed Airport Transportation – Why travel any other way?</h4>
                                    <p>From the first call to the final drop off, you are guaranteed a managed private transport service. Whatever you choose you will get a premium service. Click to contact us.</p>
                                    <a href="/contact-us/"> Contact Us </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}


export default Quotebox;