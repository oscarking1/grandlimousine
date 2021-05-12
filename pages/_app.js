import React, { Fragment, useEffect } from 'react'

import '../css/plugins.css';
import '../css/templete.css';
// import '../css/global.css';
// import '../css/contact.css';
// import '../css/superbowl.css';

// import '../css/skin/skin-1.css';
// import '../css/slick/slick-theme.min.css';
// import '../css/slick/slick.min.css';
import '../css/style.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
