import { useState } from 'react';

function Filter(props) {
    const types = [
        {value: '', title: 'All'},
        {value: 'TV', title: 'TV'},
        {value: 'OVA', title: 'Ova'},
        {value: 'Movie', title: 'Movie'},
        {value: 'Special', title: 'Special'},
        {value: 'ONA', title: 'Ona'},
        {value: 'Music', title: 'Music'}
    ]
    
    const changeFilter = (e) => {
        props.onChange.SetFilter(e.target.value)
    }
    
	return (
		<div className="select-box">
		<select name="type" onChange={changeFilter}>
    		{types.map(item => (
    		    <option key={item.value} value={item.value}> {item.title} </option>
    		))}
		</select>
		</div>
	)
}

export default Filter