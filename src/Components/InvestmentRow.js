import React from 'react';

const InvestmentCard = (props) => {

    return (
        <div className="card row mt-2 mb-2">
            <div className="card-body" style={{"padding":"12px"}}>
                <div className="row">
                    <div className="col-4"><span style={{width:"70px"}} className="badge bg-secondary">{props.stock.tickerSymbol}</span> {props.stock.company}</div>
                    <div className="col text-end">{props.stock.totalShares}</div>
                    <div className="col text-end">$492</div>
                    <div className="col text-end">$35.85</div>
                    {/* <div className="col text-end">+$52.12</div> */}
                </div>
            </div>  
        </div>
    );
};

export default InvestmentCard;