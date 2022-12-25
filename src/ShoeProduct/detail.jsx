import React, { Component } from 'react';

class Detail extends Component {
    render() {
        const { detail } = this.props;
        return (
            <>
                <div>

                    {/* Modal */}
                    <div className="modal fade" id="modelDetail" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Chi tiết</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src={detail.image} width={"100px"} height={"100px"} />
                                    <h6>{detail.name}</h6>
                                    <ul>
                                        <li>Danh hiệu: {detail.alias}</li>
                                        <li>Giá: {detail.price}</li>
                                        <li>{detail.description}</li>
                                        <li>Sẵn kho: {detail.quantity} đôi</li>
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Detail;