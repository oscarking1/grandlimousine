import React, { Component } from 'react';
import InnerBanner from '../../components/Element/Innerbanner'
import Toplimousine from '../../components/Element/Toplimousine';
import Layout from '../../components/Layout';
import { BASE_URL } from '../../config';
import axios from 'axios'
const About = (response) => {
    let res = response ? response.response : null;
    let page = { description: "" };
    if (Object.keys(res).length > 0) {
        page = res.page;
    }
    let meta = {
        title: page.meta_title,
        description: page.meta_description,
        keywords: page.meta_keywords
    }
    return (
        <Layout meta={meta}>
            <main className="page-wraper">
                <div className="page-content bg-white">

                    <InnerBanner banner={page.banner_image ? page.banner_image : null} />
                    <div dangerouslySetInnerHTML={{ __html: page.description }} />
                    <Toplimousine />
                </div>
            </main>
        </Layout>
    )
}
export const getServerSideProps = async (context) => {
    const response = await axios.get(`${BASE_URL}/page/about-us`)
        .then(({ data }) => {
            return data
        })
    return {
        props: {
            response
        }
    }
}
export default About;