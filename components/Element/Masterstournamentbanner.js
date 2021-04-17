import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bookingform from './Bookingform';

var bnr = require('./../../images/banner/augusta_masters_tournament.jpg');

class MasterstournamentBanner extends Component{
	render(){
		return(
			<div className="inner-banner overlay-black-middle" style={{backgroundImage:"url("+ bnr + ")"}}>
				<div className="container">        
					<div className="row">
						<div className="col-md-6">
								<Bookingform />
						</div>
						<div className="col-md-6">
							<div className="bnr-content text-right">
								<h2><Link to={"/contact-us/"} rel="noopener noreferrer"> BOOK YOUR RIDE INSTANTLY </Link></h2>
								<h6>TRAVEL IN COMFORT. ALWAYS ON TIME </h6>
								<h3>Call <a href="tel:4044244499" rel="noopener noreferrer">(404) 424-4499</a></h3>
							</div>
						</div>
					</div>
				</div>
			</div>	
		)
	}
}

export default MasterstournamentBanner;