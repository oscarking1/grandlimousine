import React, { Component } from 'react';
import Layout from '../../components/Layout';
import InnerBanner from '../../components/Element/Innerbanner';
import Toplimousine from '../../components/Element/Toplimousine';
import { BASE_URL } from '../../config';
import axios from 'axios'
class Contactus extends Component {
	constructor(props) {
		super(props);
		this.state = {first_name:'',last_name:'', email: '',phone:'', is_request_in_progress: false, request_status: 1, request_msg: '' };
	}
	submitForm = (event) => {
		event.preventDefault();
		if (!this.state.first_name) {
			this.setState({ is_request_in_progress: false, request_msg: 'First name is required.', request_status: 0 });
			return;
		}
		if (!this.state.last_name) {
			this.setState({ is_request_in_progress: false, request_msg: 'Last name is required.', request_status: 0 });
			return;
		}
		if (!this.state.email) {
			this.setState({ is_request_in_progress: false, request_msg: 'email is required.', request_status: 0 });
			return;
		}
		if (!this.ValidateEmail(this.state.email)) {
			this.setState({ is_request_in_progress: false, request_msg: 'Sorry! email is invalid.', request_status: 0 });
			return;
		}

		if (!this.state.phone) {
			this.setState({ is_request_in_progress: false, request_msg: 'Phone is required.', request_status: 0 });
			return;
		}

		
		this.setState({ is_request_in_progress: true, request_msg: '', request_status: 1 });
		axios.post(`${BASE_URL}/submit-contact-form`, {first_name:this.state.first_name,last_name:this.state.last_name, email: this.state.email , phone:this.state.phone })
			.then(res => {
				this.setState({ first_name:'',last_name:'',email: '',phone:'', is_request_in_progress: false, request_msg: res.data.msg, request_status: 1 });
			})
			.catch(error => {
				let msg = 'Sorry! subscription failed.';
				if (error.response.status === 422) {
					let errors = error.response.data.errors
					if (errors) {
						msg = errors[Object.keys(errors)[0]];
					}
				}
				else if (error.response.status === 423) {
					msg = error.response.data.msg;
				}
				this.setState({ is_request_in_progress: false, request_msg: msg, request_status: 0 });
			})
	}
	ValidateEmail(mail) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
			return (true)
		}
		return (false)
	}
	firstNameChangeHandler = (event) => {
		this.setState({ first_name: event.target.value });
	}
	lastNameChangeHandler = (event) => {
		this.setState({ last_name: event.target.value });
	}
	emailChangeHandler = (event) => {
		this.setState({ email: event.target.value });
	}
	phoneChangeHandler = (event) => {
		this.setState({ phone: event.target.value });
	}
	render() {
		const meta = {
			title: 'Contact Us',
			description: "BOOK YOUR RIDE INSTANTLY TRAVEL IN COMFORT. ALWAYS ON TIME.",
			keywords: 'car service, limousine Service, airport chauffeur service Houston, chauffeur car hire, sprinter limousine, transportation for events, corporate transportation, weddings, limousine service Houston, proms, party bus',
			slug: 'contact-us'
		};
		return (
			<Layout meta={meta}>
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
							<form action="#" className="form-style" onSubmit={this.submitForm}>
								<div className="form-group mb-3">
									<div className="row">
										<div className="col-lg-6">
											<input type="text" className="form-control" placeholder="First Name" onChange={this.firstNameChangeHandler} value={this.state.first_name}/>
										</div>
										<div className="col-lg-6">
											<input type="text" className="form-control" placeholder="Last Name" onChange={this.lastNameChangeHandler} value={this.state.last_name}/>
										</div>
									</div>
								</div>
								<div className="form-group mb-3">
									<div className="row">
										<div className="col-lg-6">
											<input type="email" className="form-control" placeholder="Email" onChange={this.emailChangeHandler} value={this.state.email}/>
										</div>
										<div className="col-lg-6">
											<input type="phone" className="form-control" placeholder="Phone" onChange={this.phoneChangeHandler} value={this.state.phone}/>
										</div>
									</div>
								</div>
								<div className="dzSubscribeMsg" className={
									this.state.request_status == 1 ? 'dzSubscribeMsg success-msg ' : 'dzSubscribeMsg error-msg'
								} >
									{this.state.request_msg}
								</div>
								{
									this.state.is_request_in_progress ?
									<p className="submit-btn">submitting...</p>
										:
										<button type="submit" className="submit-btn">Send Message</button>
								}
								
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