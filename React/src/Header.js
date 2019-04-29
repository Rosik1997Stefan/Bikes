import React, { Component } from 'react';
import Logo from './logo.png';
import './App.css';

export class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div className="nav">
					<div className="logo">
						<a href="index.html"><img src={Logo} alt=""/></a>
					</div>
					<div className='links'>
					 	<ul>
							<li><a href="/">HOME</a></li>
							<li><a href="/">BIKES</a></li>
							<li><a href="/">GEAR</a></li>
							<li><a href="/">PARTS</a></li>
							<li><a href="/">TIRES</a></li>
							<li><a href="/">SERVICE-INFO</a></li>
							<li><a href="/">CATALOGUES</a></li>
							<li><a href="/">CONTACT</a></li>
						</ul>
					</div>
					<div className="search">
						<a href="/"><i className="fas fa-search"></i></a>
						<a href="/"><i className="fas fa-shopping-bag"></i></a>
					</div>
				</div>	
				<div className="head">
						<h1>Bikes</h1>
				</div>
			</div>
		);
	}
}

export default Header;
