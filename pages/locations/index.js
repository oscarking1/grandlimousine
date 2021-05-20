import React, { Component } from 'react';
import InnerBanner from '../../components/Element/Innerbanner'
import Layout from '../../components/Layout';
import { BASE_URL } from '../../config';
import axios from 'axios'
import Error from '../../components/Element/Error'
import { replaceImageExtentionUsingPlatform } from '../../plugins/platform/platform';
const Locations = (response) => {
    let location = response ? response.response : null;
    let isIOS = false;
    if (Object.keys(location).length > 0) {
        isIOS = response.response.isIOS;
      }
    let title = location ? location.meta_title : 'GRAND LIMOUSINE';
    let description = location ? location.meta_description : 'GRAND LIMOUSINE WEBSITE';
    let keywords = location ? location.meta_keywords : 'GRAND LIMOUSINE WEBSITE';
    let slug = location ? location.slug : '';
    const meta = {
        title: title ? title : 'GRAND LIMOUSINE',
        description: description ? description : 'GRAND LIMOUSINE WEBSITE',
        keywords: keywords ? keywords : 'react,meta,document,html,tags',
        slug: slug
    };
    return (
        <Layout meta={meta}>
            <main className="page-wraper">
                <div className="page-content bg-white">
                    {
                        Object.keys(location).length > 0 ?
                            <div>
                                <InnerBanner banner={location.banner_image ? location.banner_image : null}  isIOS={ isIOS}/>
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(location.description,isIOS) }} />
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(location.luxury_car_section,isIOS) }} />
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(location.contact_our_team_section,isIOS) }} />
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(location.service_locations,isIOS)}} />
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
        response = await axios.get(`${BASE_URL}/get/page/locations`)
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
export default Locations;;