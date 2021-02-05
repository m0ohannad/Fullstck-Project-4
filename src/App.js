import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Details from './components/Details';
import Mailing from './components/Mailing';
import Footer from './components/Footer';

import image from './img/item-4.png';

class App extends React.Component {

  render() {

    return (
      <>
        <Header />
        <Hero />
        <Details img={image} 
        name="Pastel Pink T-shirt"
        price="$68"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, velit mi quis aliquam nibh sodales nulla. Aenean nam turpis amet eget sed. Urna faucibus nulla ac aliquam, tempor tristique dignissim. Pellentesque facilisi ante vel ullamcorper amet." 
        selected="red" />
        <Products title="Might also like" limit={9} />
        <Mailing />
        <Footer />
      </>
    );
  }
}

export default App;
