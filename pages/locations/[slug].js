import Layout from '../../components/Layout';
import axios from 'axios'
import InnerBanner from '../../components/Element/Innerbanner'
import { BASE_URL } from '../../config';
const Location = (response) => {
    let location = response ? response.response : null;
    let title = location ? location.title : 'GRAND LIMOUSINE';
    let description = location ? location.description : 'GRAND LIMOUSINE WEBSITE';
    let keywords = location ? location.keywords : 'GRAND LIMOUSINE WEBSITE';
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
                    Object.keys(location).length > 0 ? 
                    <div>
                        <InnerBanner />
                        <div dangerouslySetInnerHTML={{ __html: location.description }} />
                        <section className="section-full cities-sec-three">
                            <div className="cities-content heading">
                                <div className="container">
                                    <div className="car-services">
                                        <div className="section-head text-black text-center">
                                            <h2 className="box-title">{location.section2_heading}</h2>
                                            <div className="dlab-separator bg-primary"></div>
                                        </div>
                                        <div className="car-services">
                                            <div className="row">
                                                <div className="col-md-4 border-right border-bottom">
                                                    <h4> {location.sub_heading1}</h4>
                                                    <p>{location.sub_content1}</p>
                                                </div>
                                                <div className="col-md-4 border-right border-bottom">
                                                    <h4>{location.sub_heading2}</h4>
                                                    <p>{location.sub_content2}</p>
                                                </div>
                                                <div className="col-md-4 border-bottom">
                                                    <h4>{location.sub_heading3}</h4>
                                                    <p>{location.sub_content3}</p>
                                                </div>
                                                <div className="col-md-4 border-right ">
                                                    <h4>{location.sub_heading4}</h4>
                                                    <p>{location.sub_content4}</p>
                                                </div>
                                                <div className="col-md-4 border-right ">
                                                    <h4>{location.sub_heading5}</h4>
                                                    <p>
                                                        {location.sub_content5}
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <h4>{location.sub_heading6}</h4>
                                                    <p>
                                                        {location.sub_content6}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="text-center p-3">Sugar Loaf – McDonough – Atlanta – Johns Creek – Alpharetta – Buford –
                                        Kennesaw – Buckhead – Marietta – Sandy Springs – Dunwoody – Athens
                                    </h4>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-full cities-sec-four">
                            <div className="cities-content heading">
                                <div className="container">
                                    <div className="contact-local-teams">
                                        <div className="section-head text-black text-center">
                                            <h2 className="box-title">Contact our local team in Atlanta</h2>
                                            <div className="dlab-separator bg-primary"></div>
                                            <p>Destin, Florida | Grand Limousine | Official Website</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 text-center">
                                                <div>
                                                    <h5>Have Questions?</h5>
                                                    <p className="mb-0"> We are here to <a className="anchor" rel="noopener noreferrer"
                                                        href="/tips-for-fast-and-easy-departures-airport-car-service/"> help </a></p><a
                                                            href="/contact-us/" className="custom-btn">Contact Us</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-center">
                                                <h5>Local Team</h5>
                                                <ul>
                                                    <li>Address: <a href="https://goo.gl/maps/rvLRBP8ZYEpWaWnt9">531 Juanita Ave, Destin, FL
                                    32541, Florida, USA</a> </li>
                                                    <li>Phone: <a href="tel:4044244499"> (404) 424-4499</a> </li>
                                                    <li>Corporate: <a href="tel:4044244499"> (404) 424-4499</a> EXT. 4</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                        
                        
                            :
                            <div>
                                <InnerBanner />
                        <h1 className="text-center" style={{marginTop: "5%"}}>Sorry Page not Found...</h1>
                    </div>
                    }
                    
                </div>
            </main>
        </Layout>
    )

}
export const getServerSideProps = async (context) => {
    let slug = context.params.slug
    const response = await axios.get(`${BASE_URL}/get/page/${slug}`)
        .then(({ data }) => {
            return data
        })
    return {
        props: {
            response
        }
    }
}
export default Location