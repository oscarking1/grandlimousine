import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
let siteTitle = "ABC"
export default function Layout({ children,meta }) {
  return (
    <div>
      <Head>
        <title>{meta && meta.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={meta && meta.description} />
        <meta name="keywords" content={meta && meta.keywords} />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" /> */}
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}