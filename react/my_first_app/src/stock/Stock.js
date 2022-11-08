import React from "react";
import data from './data/stock.json'
import './stock.css'
const Stock = () => {

    return (
        <div className="d-table">
            <ul className="d-row">
                <li>
                    Company Name
                    </li>
                <li>
                    Stock Price
                </li>  
                </ul>  
                {data.map(com => <ul className="d-row"><li>
                    {com.companyName}
                    </li>
                    <li>
                    {com.stockPrice}
                    </li>
                    </ul>)}            
        </div>
        
        
    );
    
}

export default Stock