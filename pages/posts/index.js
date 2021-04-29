import React, {Component} from 'react';
import InnerBanner from '../../components/Element/Innerbanner';
import Toplimousine from '../../components/Element/Toplimousine';
import Layout from '../../components/Layout';

class Post extends Component{
	render(){
        const meta = {
            title: 'Latest Post | Grand Limousine',
            description: "Check out our latest posts and have a glimpse of our luxury transportation service. Contact our team to learn more about our luxury car services.",
            keywords: 'car service, limousine Service, airport chauffeur service Houston, chauffeur car hire, sprinter limousine, transportation for events, corporate transportation, weddings, limousine service Houston, proms, party bus',
            slug: 'posts'
        };
    return(
        <Layout meta={meta}>
            <main className="page-wraper">
            <div className="page-content bg-white">

                <InnerBanner />

                <section className="section-full content-inner">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h1 className="box-title">Posts</h1>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>

                <Toplimousine />

            </div>
            </main>
        </Layout>
		)
	}
}

export default Post;