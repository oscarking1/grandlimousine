import React, { Component } from 'react';
import InnerBanner from '../../components/Element/Innerbanner'
import Layout from '../../components/Layout';
import { BASE_URL } from '../../config';
import axios from 'axios'
import Error from '../../components/Element/Error'
const Superbowl = (response) => {
    let res = response ? response.response : null;
    let page = { description: "", meta_title: "", meta_description: "", meta_keywords: "",slug:"" };
    if (Object.keys(res).length > 0) {
        page = res.page;
    }
    let meta = {
        title: page.meta_title,
        description: page.meta_description,
        keywords: page.meta_keywords,
        slug: page.slug
    }
    return (
        <Layout meta={meta}>
            <main className="page-wraper">
                <div className="page-content bg-white">
                    {
                        Object.keys(page).length > 0 ?
                            <div>
                                <InnerBanner banner={page.banner_image ? page.banner_image : null} />
                                <div dangerouslySetInnerHTML={{ __html: page.description }} />
                                <div dangerouslySetInnerHTML={{ __html: page.service_locations }} />
                            </div>
                            :
                            <div>
                                <Error></Error>
                            </div>
                    }
                </div>
            </main>
        </Layout>
    )
}
export const getServerSideProps = async (context) => {
    let response = {};
    try {
        response = await axios.get(`${BASE_URL}/page/super-bowl`)
            .then(({ data }) => {
                return data
            })
    } catch (error) {
        if (error.response) {
            if (error.response.status == 404) {
                return {
                    notFound: true,
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
    return {
        props: {
            response
        }
    }
}
export default Superbowl;;