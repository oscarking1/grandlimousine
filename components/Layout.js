import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
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
        <meta property="og:image:secure_url" content="httpss://www.grandlimousine.com/images/banner/inner-banner.jpg" />
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

      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}