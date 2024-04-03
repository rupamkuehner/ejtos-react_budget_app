import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    //const { expenses  } = useContext(AppContext);
    //const { budget } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    }

    const dropDownStyle = {
        backgroundColor: "#90EE90",
        color: "white",
    }
    return (
<div className='alert alert-secondary'>

<select id="currencySelector" className="input-group-text" style={dropDownStyle}>
    <option value="$ Dollar" name="$ Dollar">$ Dollar</option>
    <option value="£ Pound" name="£ Pound">£ Pound</option>
    <option value="€ Euro" name="€ Euro">€ Euro</option>
    <option value="₹ Ruppee" name="₹ Ruppee">₹ Ruppee</option>
</select>
</div>
    );
};
export default Currency;
