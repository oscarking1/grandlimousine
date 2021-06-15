import React, { Component } from 'react';
import InnerBanner from '../../components/Element/Innerbanner';
import Toplimousine from '../../components/Element/Toplimousine';
import Layout from '../../components/Layout';
import axios from 'axios'
import { BASE_URL,STORAGE_URL } from '../../config';
const PostDetails =(response) => {
    let post = response ? response.response : null;
    if (Object.keys(post).length == 0) {
        post=null
    }
    let title = post ? post.name : 'Blog Details  | GRAND LIMOUSINE';
    let description = post ? post.short_description : 'GRAND LIMOUSINE WEBSITE';
    let keywords = 'GRAND LIMOUSINE WEBSITE';
    let slug = post ? post.slug : '';
    const meta = {
        title:  title ? title : 'Latest Post | Grand Limousine',
        description: description ? description : "Check out our latest posts and have a glimpse of our luxury transportation service. Contact our team to learn more about our luxury car services.",
        keywords: keywords ? keywords :'car service, limousine Service, airport chauffeur service Houston, chauffeur car hire, sprinter limousine, transportation for events, corporate transportation, weddings, limousine service Houston, proms, party bus',
        slug: slug ? slug : 'posts'
    };
    return (
        <Layout meta={meta}>
            <main className="page-wraper">
                <div className="page-content bg-white">

                    <InnerBanner />

                    <section className="section-full content-inner">
                        <div className="container">

                            <div className="single-blog-main">
                                <div className="row">

                                    <div className="col-md-12 mb-4">
                                        <div className="single-blog-box">
                                            <div className="single-blog-thumbnail">
                                                <img src={`https://backend.grandlimousine.com/storage/${post && post.media}`} width="100%" height="550px" />
                                            </div>
                                            <div className="single-blog-content">
                                                <h3>{post && post.name}</h3>
                                                <div className="dlab-separator bg-primary"></div>

                                                <div dangerouslySetInnerHTML={{ __html: post && post.description }}></div>
                                            </div>
                                        </div>
                                    </div>




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
    let slug = context.params.slug
    let response = {};
    const UA = context.req.headers['user-agent'];
    const isIOS = Boolean(UA.match('like Mac'));
    try {
        response = await axios.get(`${BASE_URL}/page/blog/${slug}`)
            .then(({ data }) => {
                return data
            })
    } catch (error) {
        response = {};
        if (error.response) {
            if (error.response.status == 404) {
                return {
                    redirect: {
                        destination: '/404',
                        permanent: false,
                    },
                }
            }
        }
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
export default PostDetails;