import React, { Component } from 'react'
import Slider from "react-slick";
import Link from 'next/link'
const aboutBlog = [
    {
        image : "/images/services/service1.jpg",
        title : 'WEDDING',
		para  :  'There is no more significant way to arrive at your big day than in a Grand Limousine. The drive to your Wedding Venue will, in itself, be a special treat and will keep you in the best mood as you say, “I do.” For your Wedding Day, you deserve nothing short of the very best as your Transportation Service Provider. great.',
		name  : 'John Doe',
		comment : '12 Comments',
    },
    {
		image : "/images/services/service2.jpg",
        title : 'AIRPORT SERVICES',
		para : 'Since 2007, We are the leader in Airport Limousine and Car Services. A proven track record of timely and safe professional transportation that works with any travel itinerary. Our Professional Chauffeurs ensure that clients arrive early for their travel plans at all Major Airports.',
		name: 'Rosalina',
		comment : '08 Comments',
    },
    {
		image : "/images/services/service3.jpg",
        title : 'PARTY BUS RENTALS',
		para: 'Your last celebration with your friends before tying the knot should be an experience to remember for life. With our Party Bus rentals, we make that possible by giving you the best way to travel around to your different Party Spots. Grand Limousine off',
		name: 'John Smith',
		comment : '03 Comments',
    },
    {
		image : "/images/services/service4.jpg",
        title : 'LIMOUSINE & AIRPORT CAR',
		para : 'We offer premium Chauffeured Services and exceptional Car Service near you. We employ the most professional and motivated personnel, supported by the latest technological facilities. We provide all forms of Chauffeur & Luxury Limousine Services and a Chauffeur Only Service for both families and business people who need to move from one meeting or destination to the next. Best Limo Service near me.',
		name: 'Rosalina',
		comment : '08 Comments',
    },
	{
		image : "/images/services/service5.jpg",
        title : '5 MARKETS CAR SERVIC',
		para : 'We offer reliable and affordable 5 Markets Car Service Transportation to or from the Hotel or Airport. Grand Limousine Service is your best choice for affordable Chauffeur Travel Services. Our experienced Chauffeurs will drive you through the dense daily traffic and make sure you arrive on time to board your flight-limousines – Official Website for Airport Car Service near me.',
		name: 'Rosalina',
		comment : '08 Comments',
    },
	{
		image : "/images/services/service6.jpg",
        title : 'CORPORATE LIMOUSINE',
		para : 'We offer high-end transport solutions adapted to the constraints of your business needs. We help you arrive at that business meeting or corporate gala in style and get the confidence to sign that multi-million dollar deal. Our Corporate Cars are of VIP standards and will provide you with the best means of private travel to your next business engagement.',
		name: 'Rosalina',
		comment : '08 Comments',
    },
	
	
	
]



class Fromblog extends Component {

    render() {
        var settings = {
            dots: false,
			arrows: true,
            slidesToShow: 3,
            infinite: true,
			cssEase: 'ease-in-out',
			autoplaySpeed: 6000,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
		};
		let services = this.props.services;
        return (
            <>
                	
                <Slider className=" owl-carousel owl-none blog-shadow-out" {...settings}>
                    {services.map((item, index) => (
                        <div className="item p-3" key={index}>
							<div className="blog-post dez-blog">
								{/* <div className="dlab-post-media"> 
									<Link to={"./"}><img src={item.image} alt=""/></Link> 
								</div> */}
								<div className="dlab-info">
									{/* <div className="category-tag">
										<Link to={"/blog-details"}>Tarvel</Link>
									</div> */}
									<div className="dlab-post-title ">
										<h5 className="post-title"><Link href={"./"}>{item.title}</Link></h5>
									</div>
									<div className="dlab-post-text">
									<p>{item.short_description}</p>
									</div>
									<div className="dlab-post-meta">
										<ul>
											{/* <li className="post-author"><i className="icon-user"></i>By <Link href= {"/blog-details"}>{item.name}</Link> </li> */}
											<li className="clickhere"> <Link href= {"./"}>Click Here</Link> </li>
										</ul>
									</div>
								</div>
							</div>
						</div>
                    ))}
					
                </Slider>
					
            </>
           
        )
    }
}
export default Fromblog;