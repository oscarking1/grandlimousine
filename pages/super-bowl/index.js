import React, { Component } from 'react';
import InnerBanner from '../../components/Element/Innerbanner'
import Layout from '../../components/Layout';
import { BASE_URL } from '../../config';
import axios from 'axios'
import Error from '../../components/Element/Error'
import { replaceImageExtentionUsingPlatform } from '../../plugins/platform/platform';
const Superbowl = (response) => {
    let res = response ? response.response : null;
    let isIOS = false;
    let page = { description: "", meta_title: "", meta_description: "", meta_keywords: "",slug:"" };
    if (Object.keys(res).length > 0) {
        page = res.page;
        isIOS = response.response.isIOS;
    }
    let meta = {
        title: page.meta_title,
        description: page.meta_description,
        keywords: page.meta_keywords,
        slug: page.slug,
        banner:page && page.banner_image ? page.banner_image : null
    }
    return (
        <Layout meta={meta}>
            <main className="page-wraper">
                <div className="page-content bg-white">
                    {
                        Object.keys(page).length > 0 ?
                            <div>
                                <InnerBanner banner={page.banner_image ? page.banner_image : null} isIOS={ isIOS} />
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(page.description,isIOS) }} />
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(page.service_locations,isIOS) }} />
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
    const UA = context.req.headers['user-agent'];
    const isIOS = Boolean(UA.match('like Mac'));
    try {
        response = await axios.get(`${BASE_URL}/page/super-bowl`)
            .then(({ data }) => {
                return data
            })
    } catch (error) {
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
export default Superbowl;;