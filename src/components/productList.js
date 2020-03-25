import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../components/productCard';
import { products as productsArr } from '../storage';

class ProductList extends React.Component {

    render() {

        return (
            <div className="container">

                <div className="row">

                    {
                        productsArr.map(pr => <div className="col-sm-4 mt-3">
                            <ProductCard image={pr.image} description={pr.description} title={pr.title} price={pr.price} />
                        </div>)
                    }

                </div>

            </div>
        );
    }
}

export default ProductList;