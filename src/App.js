import React from 'react';
import ProductList from "./container/ProductList/ProductList";
import Layout from "./HOC/Layout/Layout";

class App extends React.Component {
    render() {
        return (
            <Layout>
                <ProductList/>
            </Layout>
        );
    }

}

export default App;
