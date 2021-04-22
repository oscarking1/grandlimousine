import React, { Component } from 'react';
import InnerBanner from '../../components/Element/Innerbanner'
import Layout from '../../components/Layout';
import { BASE_URL } from '../../config';
import axios from 'axios'
import Error from '../../components/Element/Error'
const Locations = (response) => {
    let location = response ? response.response : null;
    let title = location ? location.meta_title : 'GRAND LIMOUSINE';
    let description = location ? location.meta_description : 'GRAND LIMOUSINE WEBSITE';
    let keywords = location ? location.meta_keywords : 'GRAND LIMOUSINE WEBSITE';
    const meta = {
        title: title ? title : 'GRAND LIMOUSINE',
        description: description ? description : 'GRAND LIMOUSINE WEBSITE',
        keywords: keywords ? keywords : 'react,meta,document,html,tags'
    };
    return (
        <Layout meta={meta}>
            <main className="page-wraper">
                <div className="page-content bg-white">
                    {
                        Object.keys(location).length > 0 ?
                            <div>
                                <InnerBanner banner={location.banner_image ? location.banner_image : null} />
                                <div dangerouslySetInnerHTML={{ __html: location.description }} />
                                <div dangerouslySetInnerHTML={{ __html: location.luxury_car_section }} />
                                <div dangerouslySetInnerHTML={{ __html: location.contact_our_team_section }} />
                                <div dangerouslySetInnerHTML={{ __html: location.service_locations }} />
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
            response = await axios.get(`${BASE_URL}/get/page/locations`)
            .then(({ data }) => {
                return data
            })
        } catch (error) {
            response = {};
        }
    return {
        props: {
            response
        }
    }
}
export default Locations;;