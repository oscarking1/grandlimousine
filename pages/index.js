import { useEffect } from 'react'
import InnerBanner from '../components/Element/Innerbanner';
import Layout from '../components/Layout';
import { BASE_URL } from '../config';
import axios from 'axios'
import { useRouter } from "next/router";
import { getImageUrlUsingPlatform, replaceImageExtentionUsingPlatform } from '../plugins/platform/platform';
const Home = (response) => {
  let res = response ? response.response : null;
  let sliderImages = [];
  let firstImage = "";
  let isIOS = false;
  let page = { description: "", meta_title: "", meta_description: "", meta_keywords: "",slider_images:[] };
  if (Object.keys(res).length > 0) {
    page = res.page;
    isIOS = response.response.isIOS;
    if (page.slider_images) {
      page.slider_images.forEach((e, i) => {
        if (i == 0) {
          firstImage = e.image;
        }
        sliderImages.push(`background-image:url(${getImageUrlUsingPlatform(e.image,isIOS)})`);
      })
    }
  }
  let meta = {
    title: page.meta_title,
    description: page.meta_description,
    keywords: page.meta_keywords
  }
  const runCounter = () => {
    if (process.browser) {
      const counters = document.querySelectorAll('.value');
      const speed = 200;
      counters.forEach(counter => {
        const animate = () => {
          const value = +counter.getAttribute('akhi');
          const data = +counter.innerText;
          const time = value / speed;
          if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
          } else {
            counter.innerText = value;
          }

        }

        animate();
      });
    }
  }
  if (process.browser) {
    let animated = false;
    document.body.onscroll = function (e) {
      let h = document.querySelector('.home-counter');
      var offset = h.getBoundingClientRect()
      var top = offset.top;
      if (top < window.innerHeight && top >=0 && animated==false) {
        document.querySelectorAll('.value').forEach(counter => {
          counter.innerText=0;
        });
        runCounter();
        animated = true;
        console.log('TOp',top,'window',window.innerHeight)
      } else {
        animated = false;
      }
      console.log('ANIMATEd',animated)
    }
  }
  const router = useRouter();
  let runSLider = true;
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url == '/') {
        runCounter();
        runSLider = true;
      } else {
        runSLider = false;
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
  }, [router.events]);
  let currentIndex = 0;
  if (process.browser) {
    setInterval(() => {
      currentIndex++;
      if (currentIndex == sliderImages.length) {
        currentIndex = 0;
      }
      if (runSLider) {
        document.getElementById('home-slider').style = sliderImages[currentIndex]
      }
    }
      , 40000);
  }
  return (

    <Layout meta={meta}>
      <main className="page-wraper">
        <div className="page-content bg-white">
          <InnerBanner banner={sliderImages.length>0 ? firstImage : null} isIOS={isIOS} />
          <div className="content-block">
            <div dangerouslySetInnerHTML={{ __html: replaceImageExtentionUsingPlatform(page.description, isIOS) }} />
          </div>
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
    response = await axios.get(`${BASE_URL}/page/home`)
      .then(({ data }) => {
        return data
      })
  } catch (error) {
    response = {};
  }
  response.isIOS = isIOS;
  return {
    props: {
      response
    }
  }
}

export default Home;
