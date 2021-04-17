import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Havequestion extends Component {
    render() {
        return (
                <div>
                    <h5>Have Questions?</h5>
                    <p className="mb-0"> We are here to  <Link to={"/tips-for-fast-and-easy-departures-airport-car-service/"} className={"anchor"} rel="noopener noreferrer"> help </Link></p>
                    <a href="/contact-us/" className="custom-btn">Contact Us</a> 
                </div>
        )
    }
}


export default Havequestion;