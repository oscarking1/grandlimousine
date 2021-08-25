import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-58T7FQN');`,
          }}>
          </script>
          <script type='application/ld+json' dangerouslySetInnerHTML={{
            __html: `{"@context":"http:\/\/schema.org","@type":"WebSite","url":"https://www.grandlimousine.com","name":"Grand Limousine"}`,
          }}>

          </script>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "http://schema.org",
                "@type": "Organization",
                "name": "Grand Limousine",
                "url": "https://www.grandlimousine.com/",
                "sameAs":[
                "https://www.crunchbase.com/organization/grand-limousine",
                "https://twitter.com/grandlimousin",
                "https://www.linkedin.com/in/grandlimousine",
                "https://www.instagram.com/grandlimousine",
                "https://nextdoor.com/pages/grand-limousine-houston-tx",
                "https://www.negup.com/taxi-directory/us/company/grand-limousine/33303531",
                "https://www.zoominfo.com/c/grand-limousine-llc/371416626",
                "https://www.chamberofcommerce.com/united-states/texas/houston/limousine-rentals/2011547891-grand-limousine",
                "https://www.allbiz.com/business/grand-limousine_230-404-424-4499",
                "https://www.yelp.com/biz/grand-limousine-lansing-3",
                "https://www.yellowpages.com/atlanta-ga/mip/grand-limousine-527108137"
                ],
                "logo":" https://www.grandlimousine.com/images/logo-grand.png",
                "address": {
                "@type": "PostalAddress",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode":"77041",
                "streetAddress": "13503 Somersworth Dr."
                },
                "image":"https://www.grandlimousine.com/storage/9iHW6IA9R8beKpNLeUYH6zdg2a4oaaaSDdDPAuly.jpeg",
                "email": "Info@grandlimousine.com",
                "description":" Now, you can book Executive Limo or Airport Chauffeur Service Direct with us. Fast Booking Curbside Assist and Escort Chauffeurs from The Most Trusted Worldwide Name In Travel. Providing Direct Destination Ready Executive Limousine and Airport Limo Service. The World’s Leading Provider of High-Quality Chauffeur"
                }`,
            }}
            >
          </script>
          <script type='application/ld+json' dangerouslySetInnerHTML={{
            __html: `{
              "@context": "http://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                  {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                          "@id": "https://www.grandlimousine.com/",
                          "name": "Home"
                      }
                  }
              ]
          }
          `,
          }}>

          </script>

        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58T7FQN"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
  };
};
