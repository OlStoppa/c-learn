import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


const HomePage = () => {
	return (
		
			
			<div className="wrapper">
				<div className="homePage">
					<div>
					<div className="mainOption">
						<button className="optionButton">I</button><span>In Class</span>
					</div>
					</div>
					
					<div className="bottom">
					<div className="mainOption">
						<Link to="homework"className="optionButton"><span className="spanText">H</span></Link><span>Homework</span>
					</div>
					
					<div className="mainOption">
						<button className="optionButton">D</button><span>Discussion</span>
					</div>
					</div>
					
					
				</div>
			</div>
		
		);
}

export default HomePage;