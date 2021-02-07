import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import CartPage from './pages/CartPage';
import Mailing from './components/Mailing';
import Footer from './components/Footer';
import Data from './data/store-items.json'

class App extends React.Component {
  state = {
    products: Data,
    orders: []
  }

  updateOrder(item) {
    this.setState(prevState => {
      orders: prevState.orders.push(item);
      console.log(this.state.orders);
    });
 }

    render() {
      return (
        <BrowserRouter>
          <Header />
          <>
            <Route
              exact
              path="/"
              render={(props) => (<HomePage
                {...props}
                products={this.state.products}
              />)}
            />
            <Route
              exact
              path="/details/:id"
              render={(props) => (<DetailsPage
                {...props}
                products={this.state.products}
                orders={this.state.orders}
                updateOrder={this.updateOrder.bind(this)}
              />)}
            />

            <Route
              exact
              path="/cart"
              render={(props) => (<CartPage
                {...props}
                products={this.state.products}
              />)}
            />
          </>
          <Mailing />
          <Footer />
        </BrowserRouter>
      );
    }
  }


  // class App extends React.Component {

  //   render() {

  //     return (
  //       <>
  //         <Header />
  //         <Mailing />
  //         <Footer />
  //       </>
  //     );
  //   }
  // }

  export default App;
