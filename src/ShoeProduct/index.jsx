import React, { Component } from 'react';
import Cart from './cart';
import Detail from './detail';
import ProductList from './productlist';

class ShoeProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            detail:{},
        }
    }
    deleteItemOnCart = (product) => {
        let cardAfterDelete = this.state.cart.filter((item) => {
            return item.id !== product.id 
        }) 
        this.setState({cart:cardAfterDelete})
    }
    setDetail = (product) => {
        this.setState({detail:product})
    }
    addCart = (productClick, quantity = 1) => {
        const { cart } = this.state;
        let prod = { ...productClick, soLuong: 1 }
        let checkProduct = cart.find((item) => {
            return item.id === productClick.id
        })
        if (!checkProduct) {

            cart.push(prod);
            this.setState({ cart: cart })
        } else {
            if (quantity === -1 && checkProduct.soLuong > 1) {

                checkProduct.soLuong += quantity;
                this.setState({ cart: cart })
            }
            if (quantity === 1 && checkProduct.soLuong < 10) {

                checkProduct.soLuong += quantity;
                this.setState({ cart: cart })

            }



        }
        console.log(cart);

    }

    render() {
        return (
            <>
                <Detail detail = {this.state.detail}/>
                <Cart cardData={this.state.cart} addCart={this.addCart} deleteItemOnCart = {this.deleteItemOnCart}/>
                <ProductList addCart={this.addCart} setDetail={this.setDetail}/>
            </>
        );
    }
}

export default ShoeProduct;