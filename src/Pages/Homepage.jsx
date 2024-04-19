import React from 'react'
import Products from '../Components/Product/Products';
import Banner from '../Components/Banner/Banner';
import Consult from '../Components/Consult/Consult';
import ExternalResources from '../Components/Resources/ExternalResources';

function Homepage() {
    return <div>
      <Banner />
      <Products />
      <Consult />
      <ExternalResources />
  </div>;
}

export default Homepage