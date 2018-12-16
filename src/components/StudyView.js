import React from 'react';
import Carousel from './Carousel';
import carouselSlidesData from '../courseData';

const StudyView = (props) => {
	const mode = props.location.state.mode;
	const week = props.location.state.week;

	return (
		
		
		<div className = "wrapper">
			<Carousel 
			slides={carouselSlidesData[mode][week]}
			
			/>
		</div>
		
		)
}

export default StudyView;