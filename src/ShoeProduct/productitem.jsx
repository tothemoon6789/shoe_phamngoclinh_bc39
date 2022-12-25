import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const { product, addCart, setDetail } = this.props;
        return (
            <>
                <div className='card my-1'>
                    <img src={product.image} className='card-image-top' />
                    <div className='card-body'>
                        <h5 className='card-title'>{product.name}</h5>
                        <p className='card-text'>{product.shortDescription}</p>
                        <button
                            className='btn btn-primary'
                            data-toggle="modal"
                            data-target="#modelId"
                            onClick={() => {
                                addCart(product)
                            }}
                        >Mua</button>
                        <button 
                        className='btn btn-default border ml-1' 
                        data-toggle="modal" 
                        data-target="#modelDetail"
                        onClick={() => {
                            setDetail(product)
                        }}
                        >Chi tiết</button>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductItem;