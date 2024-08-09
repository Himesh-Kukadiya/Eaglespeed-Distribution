import { useState } from 'react';
import { productList } from '../../index';
import ProductCard from './PrductCard';

const ProductList = () => {
    const [visibleProducts, setVisibleProducts] = useState(6);

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 6);
    };

    return (
        <section id="products" className="products">
            <div className="container">
                <h2 className="section-title">Our Fresh Produce</h2>
                <div className="product-grid">
                    {productList.slice(0, visibleProducts).map((product, index) => (
                        <ProductCard key={index} img={product.img} name={product.name} desc={product.desc} price={product.price} unit={product.unit} />
                    ))}
                </div>
                {visibleProducts < productList.length && (
                    <div className="text-center">
                        <button className="btn load-more-btn" onClick={loadMoreProducts}>
                            Load More <i className="fas fa-arrow-down"></i>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductList;
