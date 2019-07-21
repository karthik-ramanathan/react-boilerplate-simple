import React, {Component} from "react"
const classNames = require('classnames'); 

import s1 from  "./Button.css"
import s2 from  "./Button2.less"
//import styles from "./Button.less";

const style = {
	display: "block",
	width: 300
}

export default class Button extends Component {
	render(){
		return (
		<div className = {classNames("Button", {"color" : this.props.color}, {"size" : this.props.size}, {"disabled" : this.props.disabled})} style={style} >
			{this.props.title}
		</div>
		)
	}
}