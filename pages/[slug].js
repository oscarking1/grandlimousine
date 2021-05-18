import Layout from '../components/Layout';
import axios from 'axios'
import InnerBanner from '../components/Element/Innerbanner'
import Error from '../components/Element/Error'
import { BASE_URL } from '../config';
import { replaceImageExtentionUsingPlatform } from '../plugins/platform/platform';
const Service = (response) => {
    let service = response ? response.response : null;
    let isIOS = false;
    if (Object.keys(service).length > 0) {
        isIOS = response.response.isIOS;
      }
    let title = service ? service.meta_title : 'GRAND LIMOUSINE';
    let description = service ? service.meta_description : 'GRAND LIMOUSINE WEBSITE';
    let keywords = service ? service.meta_keywords : 'GRAND LIMOUSINE WEBSITE';
    let slug = service ? service.slug : '';
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
                        Object.keys(service).length > 0 ?
                            <div>
                                <InnerBanner banner={service.banner_image ? service.banner_image : null} isIOS={ isIOS}/>
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(service.description,isIOS) }} />
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(service.luxury_car_section,isIOS) }} />
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(service.contact_our_team_section,isIOS) }} />
                                <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(service.service_locations,isIOS) }} />
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
        response = await axios.get(`${BASE_URL}/get/servicePage/${slug}`)
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
    response.isIOS = isIOS;
    return {
        props: {
            response
        }
    }
}
export default Service
