import Button from "../../atomics/Button/Button";
import React, {Component} from "react";

require("./DemoComponent.less")



export default class DemoComponent extends Component{
	render(){
		return (
			<div className="DemoComponent">
				<Button title="Button1"></Button>
				<Button title="Button2" disabled></Button>
				<Button title="Button3" color="blue"></Button>
			</div>
		)
	}
}