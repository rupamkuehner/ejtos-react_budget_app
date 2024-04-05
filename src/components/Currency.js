import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);   

    
    const handleCurrencyChange = (event) => {
        dispatch({
                type: 'CHG_CURRENCY',
                payload: event.target.value,
            });
    }
    
    /*
    return (
<div className='alert alert-secondary'>

<select id="currencySelector" className="input-group-text" style={dropDownStyle}>
    <option value="$ Dollar" name="$ Dollar">$ Dollar</option>
    <option value="£ Pound" name="£ Pound">£ Pound</option>
    <option value="€ Euro" name="€ Euro">€ Euro</option>
    <option value="₹ Ruppee" name="₹ Ruppee">₹ Ruppee</option>
</select>
</div>
    );*/
    return (
		<div className='alert alert-secondary'>
        <label style={{marginLeft: '1rem' , backgroundColor:'#90EE90', color:'white'}} >Currency
      <select name='hover_color'id="currency" onChange={handleCurrencyChange} style={{ marginLeft: '1rem' , backgroundColor:'#90EE90', color:'white', border: 'none'}}>
        <option selected="selected" style={{color:'black'}} value="£">£ Pound</option>
        <option style={{color:'black'}} value="$">$ Dollar</option>
        <option style={{color:'black'}} value="€">€ Euro</option>
        <option style={{color:'black'}} value="₹">₹ Rupee</option>
      </select>	
      </label>
      	
    </div>
	);
};
export default Currency;
