import React, { Component } from 'react';


import './form.css';

class Form extends Component {
  state = {}

  handelSubmit = (event) => {
    event.preventDefault();

  	const name = this.name;
  	const telegram = this.telegram;
  	const text = this.text;

  	console.log('On submit');
  }

  render() {
  	return (
  		<form onSubmit={this.handelSubmit}>
  		<input
  			type="text"
  			ref={input => this.name = input}
  			placeholder="Name"
  		/>
  		<input
  			type="text"
  			ref={input => this.telegram = input}
  			placeholder="telegram"
  		/>
  		<textarea ref={input => this.text = input}></textarea>
  		<input type="submit" value="send" />
  	</form>
     );
  }
}

export default Form;