import React,{Component} from 'react';
import Link from 'next/link'
import { STORAGE_URL } from '../../config';

const cityBlog = [
	{
		image: "/images/destinations/pic3.jpg",
		title: 'San Francisco, CA',
		Link: '/locations/san-francisco/',
		alt: 'San Francisco, CA',
	},
	{
		image: "/images/destinations/pic4.jpg",
		title: 'Los Angeles, CA',
		Link: '/locations/los-angeles/',
		alt: 'Los Angeles, CA',
	},
	{
		image: "/images/destinations/pic3.jpg",
		title: 'Houston, TX',
		Link: '/locations/houston/',
		alt: 'Houston, TX',
	},
	{
		image: "/images/destinations/pic4.jpg",
		title: 'Chicago, IL',
		Link: '/locations/chicago/',
		alt: 'Chicago, IL',
	},
];



class popCity extends Component{
	
	render(){
		let cities = this.props.cities ? this.props.cities : [];
		return(
					
			<div className="row">
				{cities.map((item,index) => (
					<div className="col-lg-3 col-md-6 col-sm-6" key={index}>
					
						<div className="featured-bx m-b30">
							<div className="featured-media">
								<Link href={`/locations/${item.slug}`}><a><img src={item.banner_image ? `${STORAGE_URL}/${item.banner_image}` : '/images/destinations/pic4.jpg'} alt="city image"/></a></Link>
								
							</div>	
							<div className="featured-info">
								<ul className="featured-star">
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
								</ul>
								<h5 className="title"><Link href={`/locations/${item.slug}`}>{item.title}</Link></h5>
								<ul className="featured-category">
									
									<li><i className="fa fa-map-o"></i> 30+ Listing</li>
								</ul>
							</div>
						</div>
					
					</div>
				))}
			</div>
					
		)
	}
}

export default popCity;