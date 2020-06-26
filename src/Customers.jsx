import React from 'react';
import {Component} from 'react';
export default class Customers extends Component {
	

	render() {
		const names = ['Stein Korsveien', 'Oddmund Korsveien'];
		const listNames =  names.map((name) =>
                 <li key={name} >{name}</li>
		)
		return ( <div>
		           <h1 id= 'customers'> Customers</h1>   
                   <ul>{listNames}</ul>
				 </div>
			   )
	 }

}