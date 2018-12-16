import React from 'react';
import carouselSlidesData from '../courseData';
import Weekbox from './Weekbox';

const WeekPage = (props) => {
 	

	const mode = props.location.pathname.slice(1, props.location.pathname.length);
	
	return (
		<div className="wrapper">
		 	<div className="weekPage">
				{carouselSlidesData[mode].map((week, index) => 
			 	<Weekbox
			 	index={index} 
			 	questions={carouselSlidesData[mode][index].length}
			 	key={index}
			 	history={props.history}
			 	mode={mode}

			 	/>
				)}
			</div>

		</div>
		);	
}


export default WeekPage;