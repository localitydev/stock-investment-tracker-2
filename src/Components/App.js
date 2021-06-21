import { useState } from 'react';

// Components
import InvestmentList from './InvestmentList';
import InvestmentForm from './InvestmentForm';

import '../Styles/App.css';

function App(props) {

  const [investments, setInvestments] = useState([]);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Stock Investments</span>
        </div>
      </nav>

      {/* Application Container */}
      <div className="container mt-5">
        
        {/* Section Title */}
        <div className="row">
          <div className="col">
            <h1 className="display-5">Add a Stock Investment</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <InvestmentForm setInvestment={setInvestments} />
          </div>
        </div>
      
        <hr />

        <InvestmentList investments={ investments }/>

      </div>
      
      

      
    </div>
  );
}

export default App;