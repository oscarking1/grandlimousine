import Layout from '../../components/Layout';
import axios from 'axios'
import InnerBanner from '../../components/Element/Innerbanner'
import Error from '../../components/Element/Error'
import { BASE_URL } from '../../config';
import { replaceImageExtentionUsingPlatform } from '../../plugins/platform/platform';
import Toplimousine from '../../components/Element/Toplimousine';
const Location = (response) => {
    let location = response ? response.response : null;
    let isIOS = false;
    if (Object.keys(location).length > 0) {
        isIOS = response.response.isIOS;
    }
    let title = location ? location.meta_title : 'GRAND LIMOUSINE';
    let description = location ? location.meta_description : 'GRAND LIMOUSINE WEBSITE';
    let keywords = location ? location.meta_keywords : 'GRAND LIMOUSINE WEBSITE';
    let slug = 'locations/';
    slug += location ? location.slug : '';

    const meta = {
        title: title ? title : 'GRAND LIMOUSINE',
        description: description ? description : 'GRAND LIMOUSINE WEBSITE',
        keywords: keywords ? keywords : 'react,meta,document,html,tags',
        slug: slug,
        banner:location && location.banner_image ? location.banner_image : null
    };
    return (
        <Layout meta={meta}>
            <main className="page-wraper">
                <div className="page-content bg-white">
                    {
                        Object.keys(location).length > 0 ?
                            <div>
                                <InnerBanner banner={location.banner_image ? location.banner_image : null} isIOS={isIOS} />
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(location.description, isIOS) }} />
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(location.luxury_car_section, isIOS) }} />
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(location.contact_our_team_section, isIOS) }} />
                                {/* <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(location.service_locations, isIOS) }} /> */}
                                {location.top_limousine_service_locations ? <Toplimousine/> : <></> } 
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
    let slug = context.params.slug
    let response = {};
    const UA = context.req.headers['user-agent'];
    const isIOS = Boolean(UA.match('like Mac'));
    try {
        response = await axios.get(`${BASE_URL}/get/page/${slug}`)
            .then(({ data }) => {
                return data
            })
    } catch (error) {
        let Urls = ['miami-fl-33101', 'augusta-ga-30805', 'houston-tx-77001','destin'];
        if (Urls.includes(slug)) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            }
        }
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
export default Location