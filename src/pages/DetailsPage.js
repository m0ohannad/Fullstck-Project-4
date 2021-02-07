import React from "react";
import Details from '../components/Details';
import Products from '../components/Products';

const DetailsPage = (props) => {
    const items = props.products;
    const orders = props.orders;
    const updateOrder = props.updateOrder
    return (
        <>
            <Details items={items} orders={orders} updateOrder={updateOrder} />
            <Products products={items} title="Might also like" limit={3} />
        </>
    );
}

export default DetailsPage;