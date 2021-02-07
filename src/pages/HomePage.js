import React from "react";
import Hero from '../components/Hero';
import Products from '../components/Products';

const HomePage = (props) => {
    return (
        <>
            <Hero />
            <Products products={props.products} limit={9} />
        </>
    );
}

export default HomePage;