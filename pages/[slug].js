import Layout from '../components/Layout';
import axios from 'axios'
import InnerBanner from '../components/Element/Innerbanner'
import Error from '../components/Element/Error'
import { BASE_URL } from '../config';
const Service = (response) => {
    let service = response ? response.response : null;
    let title = service ? service.meta_title : 'GRAND LIMOUSINE';
    let description = service ? service.meta_description : 'GRAND LIMOUSINE WEBSITE';
    let keywords = service ? service.meta_keywords : 'GRAND LIMOUSINE WEBSITE';
    const meta = {
        title: title ? title : 'GRAND LIMOUSINE',
        description: description ? description : 'GRAND LIMOUSINE WEBSITE',
        keywords: keywords ?  keywords : 'react,meta,document,html,tags'
    };
    return (
        <Layout meta={meta}>
            <main className="page-wraper">
                <div className="page-content bg-white">
                    {
                    Object.keys(service).length > 0 ? 
                    <div>
                        <InnerBanner banner={service.banner_image ? service.banner_image : null}/>
                                <div dangerouslySetInnerHTML={{ __html: service.description }} />
                                <div dangerouslySetInnerHTML={{ __html: service.luxury_car_section }} />
                                <div dangerouslySetInnerHTML={{ __html: service.contact_our_team_section }} />
                                <div dangerouslySetInnerHTML={{ __html: service.service_locations }} />
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
        try {
            response = await axios.get(`${BASE_URL}/get/servicePage/${slug}`)
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
export default Service