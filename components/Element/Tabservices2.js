import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import OverservicesBlog1 from './../Element/Servicesimgblog1';
import OverservicesBlog2 from './../Element/Servicesimgblog2';
import OverservicesBlog3 from './../Element/Servicesimgblog3';
import OverservicesBlog4 from './../Element/Servicesimgblog4';

const Tabservices2 = (props) => {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	}
	return(
		<>
			<div className="site-filters clearfix center m-b40 listing-filters ">
				<ul className="filters" data-toggle="buttons">
					<li className="btn site-button-link">
					   <Link className= {classnames({ active: activeTab === '1' })} 
						   onClick={() => { toggle('1'); }}><span><i className=""></i>All</span>
					   </Link>
					</li>
					<li className="btn site-button-link">
					   <Link  className={classnames({ active: activeTab === '2' })}
						   onClick={() => { toggle('2'); }}><span><i className="la la-thumb-tack"></i> Latest Listings</span>
					   </Link>
					</li>
					<li className="btn site-button-link">
					   <Link className={classnames({ active: activeTab === '3' })}
						   onClick={() => { toggle('3'); }}><span><i className="la la-star-o"></i> Popular Ratings</span>
					   </Link>
					</li>
					<li className="btn site-button-link">
					   <Link  className={classnames({ active: activeTab === '4' })}
						   onClick={() => { toggle('4'); }}><span><i className="la la-heart-o"></i> Near By You</span>
					   </Link>
					</li>
				</ul>
			</div>
			<div className="clearfix">
				<TabContent activeTab={activeTab}>
					<TabPane tabId="1">
						<OverservicesBlog1 />
					</TabPane>
					
					<TabPane tabId="2">
						<OverservicesBlog2 />
					</TabPane>
					<TabPane tabId="3">
						<OverservicesBlog3 />
					</TabPane>
					<TabPane tabId="4">
						<OverservicesBlog4 />
					</TabPane>
				</TabContent>		
			</div>
		</>	
				
	)
	
}
export default Tabservices2;