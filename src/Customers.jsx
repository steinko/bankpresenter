import React from 'react';
import {Component} from 'react';
export default class Customers extends Component {

	constructor (props)  { 
		super(props)
	    this.state  = {
		           info: ""
		}

       this.handleChange = this.handleChange.bind(this);
	}
	

	handleChange(event) {
         this.setState({info: event.target.value});
  }

	render() {
		
	
		return ( <div>
				   <form>
					   <label>Enter Info
                          <input  id = 'info' type="text" name="info" value = {this.state.info } onChange = {this.handleChange}/>
					   </label>

					   <label>Display
						  <textarea  readOnly id = 'display' value =  'Enter customer number'/>      
					   </label>

					   <button id = 'pushButtonA' type="submit">A</button>
				
				   </form>
				   
				 </div>
			   )
	 }

}