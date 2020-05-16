import React from 'react';

import Layout   from '../components/common/layout';
import Footer   from '../components/common/Footer';

import Introduction from '../components/introduction/Introduction';

const IndexPage = () =>
  <Layout>

    <div id="wrapper">
      <Introduction />
    </div>

    <Footer />
  </Layout>

export default IndexPage;
