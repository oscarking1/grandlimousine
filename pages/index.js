import InnerBanner from '../components/Element/Innerbanner';
import Layout from '../components/Layout';
import { BASE_URL } from '../config';
import axios from 'axios'
import { getImageUrlUsingPlatform, replaceImageExtentionUsingPlatform } from '../plugins/platform/platform';
const Home = (response) => {
  let res = response ? response.response : null;
  let sliderImages = [];
  let firstImage = "";
  let isIOS = false;
  let page = { description: "", meta_title: "", meta_description: "", meta_keywords: "", slider_images: [] };
  if (Object.keys(res).length > 0) {
    page = res.page;
    isIOS = response.response.isIOS;
    if (page.slider_images) {
      page.slider_images.forEach((e, i) => {
        if (i == 0) {
          firstImage = e.image;
        }
        sliderImages.push(`background-image:url(${getImageUrlUsingPlatform(e.image, isIOS)})`);
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
    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

      );
    }
    document.addEventListener('scroll', function () {
      let h = document.querySelector('.home-counter');
      if (h) {
        if (isInViewport(h)) {
          let counterVal = 0;
          document.querySelectorAll('.value').forEach(counter => {
            counterVal = counter.innerText;
          });
          if (counterVal == 0) {
            runCounter();
          }
        } else {
          document.querySelectorAll('.value').forEach(counter => {
            counter.innerText = 0;
          });
        }
      }
    }, {
      passive: true
    });
  }
  let currentIndex = 0;
  if (process.browser) {
    setInterval(() => {
      currentIndex++;
      if (currentIndex == sliderImages.length) {
        currentIndex = 0;
      }
      if (sliderImages.length > 0) {
        if (document.getElementById('home-page-container') && document.getElementById('home-page-container').children.length > 0) {
          if (document.getElementById('home-page-container').children[0].id == 'home-slider') {
            document.getElementById('home-page-container').children[0].style = sliderImages[currentIndex]
          }
        }

      }
    }
      , 40000
      );
  }
  return (

    <Layout meta={meta}>
      <main className="page-wraper">
        <div className="page-content bg-white" id="home-page-container">
          <InnerBanner banner={sliderImages.length > 0 ? firstImage : null} isIOS={isIOS} />
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
