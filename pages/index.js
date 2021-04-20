import React from 'react'
import Link from 'next/link'
import InnerBanner from '../components/Element/Innerbanner';
import Fromblog from '../components/Element/Fromblog';
import Popcity from '../components/Element/PopCity';
import Layout from '../components/Layout';
import { BASE_URL } from '../config';
import axios from 'axios'
const Home = (response) => {
  let res = response ? response.response : null;
  let page = { description: "",meta_title:"",meta_description:"",meta_keywords:"" };
  let services = [];
  let cities = [];
  if (Object.keys(res).length > 0) {
    page = res.page;
    services = res.services;
    cities =res.cities;
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
          <InnerBanner banner={page.banner_image ? page.banner_image : null}/>
          <div className="content-block">
            <div dangerouslySetInnerHTML={{ __html: page.description }} />
            <div className="section-full home-services bg-white content-inner">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h2 className="box-title">WE CARE ABOUT YOUR SAFETY</h2>
                  <div className="dlab-separator bg-primary"></div>
                  <p>ENJOY LUXURY TRAVEL IN COMFORT AND ON TIME !</p>
                </div>
                <Fromblog services={services}/>
              </div>
            </div>
            <div className="section-full home-top-cities bg-white content-inner">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h2 className="box-title">Top Cities</h2>
                  <div className="dlab-separator bg-primary"></div>
                </div>
                <Popcity cities={cities}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>

  )
}
export const getServerSideProps = async (context) => {
  let response = {};
  try {
     response = await axios.get(`${BASE_URL}/page/home`)
    .then(({ data }) => {
      return data
    })
  } catch (error) {
    response = {};
  }
  console.log(response);
  return {
    props: {
      response
    }
  }
}

export default Home;
