import "../styles/global.scss";

import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
