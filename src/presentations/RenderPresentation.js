import React, { useEffect } from 'react';

import Reveal from 'reveal.js';
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/black.css';

import WebpackBasics from './WebpackBasics';

const routeMap = {
  '/webpack-basics': <WebpackBasics/>,
};

const RenderPresentation = ({route}) => {
  useEffect(() => {
    routeMap[route] && Reveal.initialize({ });
  }, [route]);

  const render404 = () => {
    return (
      <div className="RenderPresentation__404-container">
        <h1>Presentation Not Found</h1>
      </div>
    );
  }

  return (
    <>
      { routeMap[route] || render404() }
    </>
  );
};

export default RenderPresentation;
