import React from 'react';
import InnerBanner from '../../components/Element/Innerbanner';
import Toplimousine from '../../components/Element/Toplimousine';
import Layout from '../../components/Layout';
import { BASE_URL, STORAGE_URL } from '../../config';
import axios from 'axios'
const Post = (response) => {
    const meta = {
        title: 'Latest Post | Grand Limousine',
        description: "Check out our latest posts and have a glimpse of our luxury transportation service. Contact our team to learn more about our luxury car services.",
        keywords: 'car service, limousine Service, airport chauffeur service Houston, chauffeur car hire, sprinter limousine, transportation for events, corporate transportation, weddings, limousine service Houston, proms, party bus',
        slug: 'posts'
    };
    let posts = response ? response.response : [];
    let isIOS = false;
    return (
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

                            <div className="blog-main">
                                <div className="row">
                                    {
                                        posts.map((item, index) =>
                                        (
                                            <div className="col-md-4 mb-4" key={index}>
                                                <div className="blog-box">
                                                    <div className="blog-thumbnail">
                                                        <img src={`https://backend.grandlimousine.com/storage/${item.media}`} width="300px" height="300px" />
                                                    </div>
                                                    <div className="blog-content">
                                                        <h3>{item.name}</h3>
                                                        <p>{item && item.short_description.substr(0, 100)} <a href={`/posts/${item.slug}`} className="">[...]</a></p>
                                                        <a href={`/posts/${item.slug}`} className="custom-btn">Read More</a>
                                                    </div>
                                                </div>
                                            </div>

                                        ))

                                    }
                                    {
                                        posts.length == 0 ?
                                            <h3 className="text-center">
                                                No Post Found ...
                                            </h3>
                                            : <></>
                                    }



                                </div>

                            </div>

                        </div>

                    </section>




                    <Toplimousine />

                </div>
            </main>
        </Layout>
    )
}
export const getServerSideProps = async (context) => {
    let response = {};
    const UA = context.req.headers['user-agent'];
    const isIOS = Boolean(UA.match('like Mac'));
    try {
        response = await axios.get(`${BASE_URL}/page/blog`)
            .then(({ data }) => {
                return data
            })
    } catch (error) {
        response = {};
        return {
            redirect: {
                destination: '/500',
                permanent: false,
            },
        }
    }
    response.isIOS = isIOS;
    return {
        props: {
            response
        }
    }
}
export default Post;