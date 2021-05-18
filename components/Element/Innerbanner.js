import React, { Component } from 'react';
import { getImageUrlUsingPlatform } from '../../plugins/platform/platform';
import Link from 'next/link'
import dynamic from 'next/dynamic'
const Bookingform = dynamic(
	() => import('./Bookingform'),
	{
		ssr: true ,
		loading: () => <p>...</p>
	}
);
const Loader = dynamic(
	() => import('./Loader')
);
var bnr = "/images/banner/inner-banner.jpg";
class InnerBanner extends Component{
	state = {
		loading: true
	}
	render() {
		setTimeout(() => {
			this.setState({ loading: false });
		}, 5000);
		const lazayLoad = () => {
			if (this.state.loading) {
				return <Loader/>
			} else {
				return <Bookingform/>
			}
		};
		if (this.props.banner) {
			let isIOS = this.props.isIOS ? true : false;
			bnr = getImageUrlUsingPlatform(this.props.banner,isIOS);
		}
		return(
			<div className="inner-banner" id="home-slider" style={{backgroundImage:"url("+ bnr + ")"}}>
				<div className="container">        
					<div className="row">
						<div className="col-md-6 text-center">
							{
								process.browser ? lazayLoad(): <></>
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