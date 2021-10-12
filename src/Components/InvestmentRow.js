import React from 'react';

const InvestmentRow = (props) => {

    return (
        <div className="card row mt-2 mb-2">
            <div className="card-body" style={{"padding":"12px"}}>
                <div className="row">
                    <div className="col-4"><span style={{width:"70px"}} className="badge bg-secondary">{props.investment.ticker_symbol}</span> Company Name</div>
                    <div className="col text-end">{props.investment.shares}</div> {/* Shares */}
                    <div className="col text-end">${props.investment.total_price.toFixed(2)}</div> {/* Total Price */}
                    <div className="col text-end">${props.investment.price_per_share.toFixed(2)}</div> {/* Price Per Share */}
                    {/* <div className="col text-end">+$52.12</div> */}
                </div>
            </div>  
        </div>
    );
};

export default InvestmentRow;