import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import { getImageUrlUsingPlatform } from '../plugins/platform/platform';
export default function Layout({ children, meta }) {
  return (
    <div>
      <Head>
        <title>{meta && meta.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={meta && meta.description} />
        <meta name="keywords" content={meta && meta.keywords} />
        <link rel="canonical" href={`https://www.grandlimousine.com/${(meta && meta.slug) ? meta.slug + "/" : ''}`} />

        <meta name="author" content="Grand Limousine" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta && meta.title} />
        <meta name="twitter:description" content={meta && meta.description} />
        <meta name="twitter:site" content="@grandlimousin" />
        <meta name="twitter:creator" content="@grandlimousin" />
        <meta name="twitter:image" content="https://www.grandlimousine.com/images/banner/inner-banner.jpg" />
        <meta property="og:title" content={meta && meta.title} />
        <meta property="og:description" content={meta && meta.description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Grand Limousine" />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content={`https://www.grandlimousine.com/${(meta && meta.slug) ? meta.slug + "/" : ''}`} />
        <meta property="og:image" content="https://www.grandlimousine.com/images/banner/inner-banner.jpg" />
        <meta property="og:image:secure_url" content="https://www.grandlimousine.com/images/banner/inner-banner.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1903" />
        <meta property="og:image:height" content="537" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Grand Limousine" />
        <meta property="business:contact_data:street_address" content="13503 Sommersworth DR" />
        <meta property="business:contact_data:locality" content="HOUSTON" />
        <meta property="business:contact_data:postal_code" content="TX 77041" />
        <meta property="business:contact_data:country_name" content="United States" />
        <meta property="business:contact_data:email" content="info@grandlimousine.com" />
        <meta property="business:contact_data:phone_number" content="1 (404) 424-4499" />
        <meta property="business:contact_data:website" content="https://www.grandlimousine.com/" />
        <meta property="place:location:latitude" content="29.7604" />
        <meta property="place:location:longitude" content="-95.3698" />
        <meta name="thumbnail" content={`https://www.grandlimousine.com${(meta && meta.banner) ? getImageUrlUsingPlatform(meta.banner) + "/" : '/images/banner/inner-banner.jpg/'}`} />

        {
          meta && meta.schema
            ?
            <div>
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{
                  "@context": "https://schema.org",
                  "@type": "AutoRental",
                  "url": "https://www.grandlimousine.com/",
                  "logo":" https://www.grandlimousine.com/images/logo-grand.png",
                  "image":"https://www.grandlimousine.com/storage/9iHW6IA9R8beKpNLeUYH6zdg2a4oaaaSDdDPAuly.jpeg",
                  "priceRange": "Contact Us For Price Range",
                  "hasMap": "https://www.google.com/maps/place/Grand+Limousine/@29.8622909,-95.6152334,17z/data=!3m1!4b1!4m5!3m4!1s0x8640d1b0716ceb83:0x7dafc489b0e161c3!8m2!3d29.8623328!4d-95.613045",
                  "email": "Info@grandlimousine.com",
                   "aggregateRating": {
                   "@type": "AggregateRating", 
                    "ratingValue": "5", 
                   "reviewCount": "16"
                    },
                  "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Houston",
                  "addressRegion": "TX",
                  "postalCode":"77041",
                  "streetAddress": "13503 Somersworth Dr."
                  },
                  "name": "Grand Limousine",
                  "telephone": "(404) 424-4499",
                  "openingHours": "24/7",
                  "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "-95.6152334",
                  "longitude": "29.8622909"
                  }
                  }                
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/r6S8x5BY4jB991ras9R96uC71YlsoRvCVKBcHPEK.jpeg ",
              "hasMap": "https://www.google.com/maps/place/Grand+Limousine/@32.9147454,-119.5421052,3z/data=!4m5!3m4!1s0x88f3fb0bbb1bacd3:0x75762708ac1cf4ca!8m2!3d32.9147468!4d-83.6827637",
              "priceRange": "$225-$245",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"111 River Knoll",
              "postalCode":"31211",
              "addressLocality":"Macon",
              "addressRegion":"GA",
              "addressCountry":"USA"}}                         
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/CFUEqyipZ4hYHwh9t5Gi4SlCp2q5ZUspRi2Dm3Xm.jpeg",
              "hasMap": "https://www.google.com/maps/place/Grand+Limousine/@33.4428744,-84.1777813,17z/data=!3m1!4b1!4m5!3m4!1s0x88f45b4833891c43:0x518ff928029b5831!8m2!3d33.4428744!4d-84.1755926",
              "priceRange": "$225-$245",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"312 Concord Terrace",
              "postalCode":"30253",
              "addressLocality":"McDonough",
              "addressRegion":"GA",
              "addressCountry":"USA"}}                      
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/DS4djA14wItNOpWCAmpnFhFe6kdRqhQA4XLfO0Fc.jpeg",
              "hasMap": "https://www.google.com/maps/place/Grand+Limousine/@33.8443504,-120.1842835,3z/data=!4m5!3m4!1s0x88f50d8bd39d1a11:0x47913c96d5427414!8m2!3d33.8443504!4d-84.3249085",
              "priceRange": "$600 - $750",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"23 Rausch St",
              "postalCode":"94103",
              "addressLocality":"San Francisco",
              "addressRegion":"CA",
              "addressCountry":"USA"}}                      
            `,
            }}>
  
              </script>
    
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/6yabmghM5XvaugiXzLoRfx8R96mwVxL3CCm9v0BK.jpeg",
              "priceRange": "Contact Us For Price Range",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"240 S Main St",
              "postalCode":"90012",
              "addressLocality":"Los Angeles",
              "addressRegion":"CA",
              "addressCountry":"USA"}}                 
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/DS4djA14wItNOpWCAmpnFhFe6kdRqhQA4XLfO0Fc.jpeg",
              "priceRange": "Contact Us For Price Range",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"W Fulton St Ste. 5",
              "postalCode":"60612",
              "addressLocality":"Los Angeles",
              "addressRegion":"IL",
              "addressCountry":"USA"}}                     
            `,
            }}>
  
              </script>
            
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/DS4djA14wItNOpWCAmpnFhFe6kdRqhQA4XLfO0Fc.jpeg",
              "priceRange": "Contact Us For Price Range",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"38 E 37th St",
              "postalCode":"10016",
              "addressLocality":"New York",
              "addressRegion":"NY",
              "addressCountry":"USA"}}                       
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `
                {"@context":"http://schema.org",
                "@type":"AutoRental",
                "name":"Grand Limousine ",
                "image":"https://www.grandlimousine.com/storage/DS4djA14wItNOpWCAmpnFhFe6kdRqhQA4XLfO0Fc.jpeg",
                "priceRange": "Contact Us For Price Range",
                "telephone":"(404) 424-4499",
                "address":{"@type":"PostalAddress",
                "streetAddress":"142 E Jackson St",
                "postalCode":"32801",
                "addressLocality":"Orlando",
                "addressRegion":"FL",
                "addressCountry":"USA"}}         
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/DS4djA14wItNOpWCAmpnFhFe6kdRqhQA4XLfO0Fc.jpeg",
              "priceRange": "Contact Us For Price Range",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"3225 NW 204th Terrace",
              "postalCode":"33056",
              "addressLocality":"Miami Gardens",
              "addressRegion":"FL",
              "addressCountry":"USA"}}                     
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/DS4djA14wItNOpWCAmpnFhFe6kdRqhQA4XLfO0Fc.jpeg",
              "priceRange": "Contact Us For Price Range",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"531 Juanita Ave",
              "postalCode":"32541",
              "addressLocality":"Destin",
              "addressRegion":"FL",
              "addressCountry":"USA"}}                
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/DS4djA14wItNOpWCAmpnFhFe6kdRqhQA4XLfO0Fc.jpeg",
              "priceRange": "Contact Us For Price Range",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"W Adams Street",
              "postalCode":"32202",
              "addressLocality":"Jacksonville",
              "addressRegion":"FL",
              "addressCountry":"USA"}}                         
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/avN1YYbyPIbIDJGl93PFWGFvS2zGyz8uXW6wt0oR.jpeg",
              "priceRange": "Contact Us For Price Range",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "addressLocality":"Columbus",
              "addressRegion":"GA",
              "addressCountry":"USA"}}                              
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/PPS3XPCGkCOcdSPkFJRfa4wOjxJIaxjACPI15pAV.jpeg",
              "priceRange": "Contact Us For Price Range",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "addressLocality":"Augusta",
              "addressRegion":"GA",
              "addressCountry":"USA"}}                      
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/DS4djA14wItNOpWCAmpnFhFe6kdRqhQA4XLfO0Fc.jpeg",
              "priceRange": "Contact Us For Price Range",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"Habersham St",
              "postalCode":"31211",
              "addressLocality":"Savannah",
              "addressRegion":"GA",
              "addressCountry":"USA"}}                        
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/DS4djA14wItNOpWCAmpnFhFe6kdRqhQA4XLfO0Fc.jpeg",
              "priceRange": "Contact Us For Price Range",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"110 Dolly St",
              "postalCode":"31032",
              "addressLocality":"Gray",
              "addressRegion":"GA",
              "addressCountry":"USA"}}                                      
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/DS4djA14wItNOpWCAmpnFhFe6kdRqhQA4XLfO0Fc.jpeg",
              "priceRange": "Contact Us For Price Range",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"204 Royal Palm Way",
              "postalCode":"33480",
              "addressLocality":"Palm Beach",
              "addressRegion":"FL",
              "addressCountry":"USA"}}                                      
            `,
            }}>
  
              </script>
              
            <script  type='application/ld+json' dangerouslySetInnerHTML={{
              __html: `{"@context":"http://schema.org",
              "@type":"AutoRental",
              "name":"Grand Limousine ",
              "image":"https://www.grandlimousine.com/storage/DS4djA14wItNOpWCAmpnFhFe6kdRqhQA4XLfO0Fc.jpeg",
              "priceRange": "Contact Us For Price Range",
              "telephone":"(404) 424-4499",
              "address":{"@type":"PostalAddress",
              "streetAddress":"1002 Baker Ave",
              "postalCode":"40203",
              "addressLocality":"Kentucky",
              "addressRegion":"KY",
              "addressCountry":"USA"}}                                      
            `,
            }}>
  
            </script>

            </div>
            :

            <></>
       }
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}