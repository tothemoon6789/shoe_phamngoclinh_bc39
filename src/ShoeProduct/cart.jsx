import React, { Component } from 'react';

class Cart extends Component {
    renderTable = () => {
        const { cardData,addCart,deleteItemOnCart } = this.props;
        let count = 0 ;
        return cardData.map((item,index) => {
            return <tr key={index}>
                <td className='align-middle d-none d-md-block'>{count++}</td>
                <td className='align-middle'>{item.name}</td>
                <td className='align-middle'><img src={item.image} width={"50px"} height={"50px"}/></td>
                <td className='align-middle'>
                    <button className='btn btn-default border' onClick={() => {
                        addCart(item,-1)
                    }}>-</button>
                    <span>{` ${item.soLuong} `}</span>
                     <button className='btn btn-default border' onClick={() => {
                        addCart(item,1)
                    }}>+</button>
                </td>
                <td className='align-middle'>{item.price}</td>
                <td className='align-middle'>{item.price*item.soLuong}</td>
                <td className='align-middle'><button className='btn btn-danger btn-sm' onClick={() => {
                    deleteItemOnCart(item)
                }}>Xóa</button></td>
            </tr>
        })

    }
    render() {
        return (
            <>
                <div>

                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Giỏ hàng</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th className='d-none d-md-block'>TT</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Hình ảnh</th>
                                                <th>Số lượng</th>
                                                <th>Giá tiền</th>
                                                <th>Thành tiền</th>
                                                <th>Xóa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderTable()}

                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                    <button type="button" className="btn btn-primary">Thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Cart;