import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import CartPage from './pages/CartPage';
import Mailing from './components/Mailing';
import Footer from './components/Footer';
import Data from './data/store-items.json'

const App = () => {

  const [products, setProducts] = useState([...Data])
  const [orders, setOrders] = useState([])

  const updateOrder = (item, count) => {
    const ordered = {name: item.name, image: item.image, price: item.price, count:count}
    if(!orders.find(o => o.name.includes(item.name))){
      setOrders([...orders, ordered])
    }else{
      orders.find(o => o.name.includes(item.name)).count += count;
    }
    console.log(orders)
  }


  return (
    <BrowserRouter>
      <Header />
      <>
        <Route
          exact
          path="/"
          render={(props) => (<HomePage
            {...props}
            products={products}
          />)}
        />
        <Route
          exact
          path="/details/:id"
          render={(props) => (<DetailsPage
            {...props}
            products={products}
            orders={orders}
            updateOrder={updateOrder}
          />)}
        />
        <Route
          exact
          path="/cart"
          render={(props) => (<CartPage
            {...props}
            products={products}
            orders={orders}
          />)}
        />
      </>
      <Mailing />
      <Footer />
    </BrowserRouter>
  );

}

export default App;
