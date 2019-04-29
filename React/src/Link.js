import React, { Component } from 'react';

const Link = (props)=> {
		return (
			<div>
				<a   onClick={props.onClick} className="fl" href="/">{props.link} <span className="badge pull-right">{props.badge}</span> </a>		
			</div>
		);
}
export default Link;
