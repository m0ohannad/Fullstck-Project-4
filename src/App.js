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

  const [products] = useState([...Data])
  const [orders, setOrders] = useState([])

  const updateOrder = (item, count) => {
    const n = (Number(item.price.replace(/[^0-9.]/g, '')) * count);
    const ordered = { name: item.name, image: item.image, price: n, count: count }
    const find = orders.find(o => o.name.includes(item.name))
    if (!find) {
      setOrders([...orders, ordered])
    } else {
      find.count += count;
      find.price += n;
    }
  }

  const checkOut = (item) => {
    const find = orders.find(o => o.name.includes(item.name))
    if (find) {
      const filter = orders.filter(o => o.name !== find.name)
      setOrders(filter)
    }
  }

  const checkOutAll = () => {
    setOrders([])
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
            orders={orders}
            checkOut={checkOut}
            checkOutAll={checkOutAll}
          />)}
        />
      </>
      <Mailing />
      <Footer />
    </BrowserRouter>
  );

}

export default App;
