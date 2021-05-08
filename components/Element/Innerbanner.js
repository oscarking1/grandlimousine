import React, {Component} from 'react';
import Link from 'next/link'
import Bookingform from './Bookingform';

var bnr = "/images/banner/inner-banner.jpg";
import { STORAGE_URL } from '../../config';
class InnerBanner extends Component{
	render() {
		if (this.props.banner) {
			bnr = STORAGE_URL+"/"+this.props.banner;
		}
		return(
			<div className="inner-banner overlay-black-middle" id="home-slider" style={{backgroundImage:"url("+ bnr + ")"}}>
				<div className="container">        
					<div className="row">
						<div className="col-md-6">
							{
								process.browser ? <Bookingform /> : <></>
							}
								
						</div>
						<div className="col-md-6">
							<div className="bnr-content text-right">
								<h2><Link href={"/contact-us/"} rel="noopener noreferrer"> BOOK YOUR RIDE INSTANTLY </Link></h2>
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

export default InnerBanner;