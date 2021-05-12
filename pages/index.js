import {useEffect} from 'react'
import InnerBanner from '../components/Element/Innerbanner';
import Layout from '../components/Layout';
import { BASE_URL } from '../config';
import axios from 'axios'
import { useRouter } from "next/router";
const Home = (response) => {
  let res = response ? response.response : null;
  let page = { description: "",meta_title:"",meta_description:"",meta_keywords:"" };
  if (Object.keys(res).length > 0) {
    page = res.page;
  }

  let meta = {
    title: page.meta_title,
    description: page.meta_description,
    keywords: page.meta_keywords
  }
  const runCounter=()=>{
    if (process.browser) {
      const counters = document.querySelectorAll('.value');
      const speed = 200;
      
      counters.forEach( counter => {
         const animate = () => {
            const value = +counter.getAttribute('akhi');
            const data = +counter.innerText;
           
            const time = value / speed;
           if(data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
              }else{
                counter.innerText = value;
              }
           
         }
         
         animate();
      });
    }
  }
  runCounter();
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      if(url=='/'){
        runCounter();
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  let images=['background-image:url(http://backend.grandlimousine.com/storage/OebdEhSP49SxM9B2xkuwyymGJHRPz4rYtuijkfDq.jpeg)',
  'background-image:url(http://backend.grandlimousine.com/storage/pIhPghP6tz4HPyeieTpsG34zToulqUBfccXEDGQk.jpeg)',
  'background-image:url(http://backend.grandlimousine.com/storage/VArczp3qP0npxI8od5Zl45dpGQqwKq8fvBmE4spz.jpeg)',
  'background-image:url(http://backend.grandlimousine.com/storage/jqWIUX7T5LU0orEAccOSdgwVL3nKJiRNi5afzCwK.jpeg)'];
  let currentIndex=0;
  if (process.browser) {
  setInterval(()=>{
  currentIndex++;
  if(currentIndex==images.length)
  {
  currentIndex=0;
  }
  // console.log('index',currentIndex);
  document.getElementById('home-slider').style=images[currentIndex]}
  ,40000);
  }
  
  return (

    <Layout meta={meta}>
      <main className="page-wraper">
        <div className="page-content bg-white">
          <InnerBanner banner={page.banner_image ? page.banner_image : null}/>
          <div className="content-block">
            <div dangerouslySetInnerHTML={{ __html: page.description }} />
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
  return {
    props: {
      response
    }
  }
}

export default Home;
