import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Mailing from './components/Mailing';
import Footer from './components/Footer';

class App extends React.Component {

  render() {

    return (
      <>
        <Header />
        <Hero />
        <Products limit={3} />
        <Mailing />
        <Footer />
      </>
    );
  }
}

export default App;
