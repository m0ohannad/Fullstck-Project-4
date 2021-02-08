import React from "react";
import Details from '../components/Details';
import Products from '../components/Products';

const DetailsPage = (props) => {
    const { orders, updateOrder, products } = props
    return (
        <>
            <Details items={products} orders={orders} updateOrder={updateOrder} />
            <Products products={products} title="Might also like" limit={3} />
        </>
    );
}

export default DetailsPage;