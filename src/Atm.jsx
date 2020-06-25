import React from 'react';
import {Component} from 'react';
import AtmService from './AtmService'

export default class Atm extends Component {

	constructor (props)  { 
		super(props)
	    this.state  = {
				   info: "",
				   display: ""
		}

	   this.handleChange = this.handleChange.bind(this);
	   this.handleClick = this.handleClick.bind(this);
	}
	

	handleChange(event) {
         this.setState({info: event.target.value});
  }

   handleClick(event) {  
	  let atmService = new AtmService()
	  this.setState({display:  atmService.pushButtonA(this.state.info)})
	  event.preventDefault();
  }


	render() {
		
	
		return ( <div>
				   <form onSubmit= {this.handleClick}>

					   <label>Enter Info
                          <input  id = 'info' type="text" name="info" value = {this.state.info } onChange = {this.handleChange}/>
					   </label>

					   <label>Display
						  <textarea  readOnly id = 'display' value = {this.state.display }/>      
					   </label>

					   <input id = 'pushButtonA' type="submit"  value = 'A'/>
				
				   </form>
				   
				 </div>
			   )
	 }

}