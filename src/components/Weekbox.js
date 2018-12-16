import React from 'react';

const Weekbox = (props) => {
	return (
		<div className="weekbox" onClick={() => {
			props.history.push({pathname:`/study/${props.index+1}`, state:
			{
				mode: props.mode,
				week:props.index, 
			}});

		}}>
			<h3> Week {props.index + 1}</h3>
			<div className="spacer"></div>
			<div className="weekbox__footer">
			 <h4>{props.questions} parts</h4>
				
			</div>

			
		</div>
		);
}

export default Weekbox;