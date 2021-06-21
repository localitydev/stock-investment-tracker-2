import React from 'react';

const InvestmentCard = (props) => {

    return (
        <div className="card row mt-2 mb-2">
            <div className="card-body" style={{"padding":"12px"}}>
                <div className="row" data-bs-toggle="collapse" data-bs-target="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <div className="col-4"><span style={{width:"70px"}} className="badge bg-secondary">AMC</span> AMC Entertainment</div>
                    <div className="col text-end">12.53</div>
                    <div className="col text-end">$492</div>
                    <div className="col text-end">$35.85</div>
                    <div className="col text-end">+ $52.12</div>
                </div>

                {/* Stock investment breakdown */}
                <div className="collapse" id="collapseExample">
                    <table className="table mt-4 text-end">
                        <thead>
                            <tr>
                                <td className="text-start">Filled</td>
                                <td>Shares</td>
                                <td>Total Cost</td>
                                <td>Avg Per Share</td>
                                <td>Gains</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-start">May 28, 2021 at 10:00 AM</td>
                                <td>5.908432</td>
                                <td>$200.00</td>
                                <td>$33.85</td>
                                <td>-$64.46</td>
                            </tr>
                            <tr>
                                <td className="text-start">May 28, 2021 at 2:19 PM</td>
                                <td>11.07</td>
                                <td>$300.00</td>
                                <td>$33.85</td>
                                <td>-$64.46</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>  

        </div>
    );
};

export default InvestmentCard;