import React, { Component } from 'react';
var bnr = "/images/banner/inner-banner.jpg"
import Layout from '../../components/Layout';
import InnerBanner from '../../components/Element/Innerbanner';
import Toplimousine from '../../components/Element/Toplimousine';
class Contactus extends Component {
    render() {
        const meta = {
            title: 'Contact Us',
            description: "BOOK YOUR RIDE INSTANTLY TRAVEL IN COMFORT. ALWAYS ON TIME.",
            keywords: 'car service, limousine Service, airport chauffeur service Houston, chauffeur car hire, sprinter limousine, transportation for events, corporate transportation, weddings, limousine service Houston, proms, party bus'
        };
        return (
            <Layout  meta={meta}>
               	<InnerBanner />
					<section className="section-full content-inner">
						<div className="container">
							<div className="section-head inner-section-head text-black text-center">
								<h1 className="box-title">Contact Us – Grand Limousine</h1>
								<div className="dlab-separator bg-primary"></div>
								<p>The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
							</div>
							<div className="contact-us-main heading">
								<h4>Drop us a line or just say Hello!</h4>
								<form action="#" className="form-style">
										<div className="form-group mb-3">
											<div className="row">
												<div className="col-lg-6">
													<input type="text" className="form-control"  placeholder="First Name"/>
												</div>
												<div className="col-lg-6">
													<input type="text" className="form-control"  placeholder="Last Name"/>
												</div>
											</div>
										</div>
										<div className="form-group mb-3">
											<div className="row">
												<div className="col-lg-6">
													<input type="email" className="form-control"  placeholder="Email"/>
												</div>
												<div className="col-lg-6">
													<input type="phone" className="form-control"  placeholder="Phone"/>
												</div>
											</div>
										</div>
									<button type="submit" className="submit-btn">Send Message</button>
								</form>
								<div className="deal-with-us">
									<h4>Come and Deal with us</h4>
									<strong>Grand Limousine</strong> offers the best transport so you can make the most of your business or leisure trip. This is what we take pride in. We provide all our clients with a superlative quality personalized solution for transport.
									<ul>
										<li>Address: <a href="https://g.page/grand-limousine-houston?share">13503 Somersworth Dr, Houston, TX 77041, Georgia, USA</a> </li>
										<li>Phone: <a href="tel:4044244499"> (404) 424-4499</a> </li>
										<li>Email: <a href="mailto:info@grandlimousine.com"> info@grandlimousine.com </a></li>
									</ul>
								</div>
							</div>
						</div>
					</section>


					<Toplimousine />
            </Layout>
        )
    }
}

export default Contactus;