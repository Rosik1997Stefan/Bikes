import React from 'react';
import './App.css'

const Card = (props)=>{
	return(
			<div className="Card">
					<div className="top">
						<img src={props.img} alt=""/>
					</div>
					<div className="bot">
						<p>{props.text}</p>
						<span>{props.price}</span>
					</div>
			</div>
		);
};

export default Card;