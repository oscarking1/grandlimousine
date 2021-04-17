import React, {Component} from 'react';
import InnerBanner from '../../components/Element/Innerbanner';
import Toplimousine from '../../components/Element/Toplimousine';
import Layout from '../../components/Layout';

class Post extends Component{
	render(){
        const meta = {
            title: 'Posts',
            description: "",
            keywords: 'react,meta,document,html,tags'
        };
    return(
        <Layout meta={meta}>
            <main className="page-wraper">
            <div className="page-content bg-white">

                <InnerBanner />

                <section className="section-full content-inner">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Posts</h2>
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