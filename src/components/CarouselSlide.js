import React from 'react';
import YoutubeEmbedVideo from 'youtube-embed-video';

const CarouselSlide = (props) => {

	return (
	  <li
		className={
		  props.index == props.activeIndex
			? "carousel__slide carousel__slide--active"
			: "carousel__slide"
		}
	  >
	  {props.slide.title &&
	  <div className="slide__content">
		<h3>{props.slide.title}</h3>
	  </div>
	  }
	 
	  {props.slide.video &&
	  	<div className="slide__content">
	  		<YoutubeEmbedVideo className="video" videoId={props.slide.video} suggestions={false}/>
	  	</div>
	  }
	  {props.slide.paragraph &&
	  <div className="slide__content">
		  <p>
			{props.slide.paragraph}
		  </p>
	  </div>
	  }
	  {props.slide.img &&
	  <div className="slide__content">
		
		<img src={props.slide.img} /> 
	  </div>
	  }
	  {!props.slide.noSubmit &&
		<form onSubmit={(e)=>
			{e.preventDefault();
			props.handleSubmit();
		}}>
	  { props.slide.gap &&
	  	<div className="slide__content">
	  	
	  	<h2>{props.slide.before}
			<input required maxLength="1"className="blank" type="text" name="gap" onChange={props.onChange}>
			</input>
			{props.slide.after}</h2>
	  	</div>

	  }

	  {props.slide.correct &&
	  	<div className="slide__content">
	  		<h1>{props.slide.correct}</h1>
	  		<textarea type="text" value={props.value} onChange={props.onChange} required></textarea>
	  	</div>
	  }



	  {props.slide.radio &&
	  	<div className="slide__content">
	  	
	  	{props.slide.radio.map((section, index) => {
	  		return( <div>
	  				<h2>
	  					<span>{index + 1}. </span>{section.question}
	  				</h2>
	  				
	  				{section.options.map((option,key) => {
	  					return (
	  						<div className="radio__option">
	  						<label>
	  						<input 
	  							type='radio' 
	  							name={section.name}
									value={option}
									className="radio__input"
									onChange={(e) => props.onRadioChange(index, e)}
									required
	  							/>
	  							{option}
	  							
	  						</label>
	  						</div>
	  						);
	  				})}
	  				</div>);
	  		})}
	  	</div>
	  }

	  {props.slide.input &&
	  	<div>
	  			<textarea 
	  			required 
	  			placeholder="Answer here" 
	  			name={props.index} 
	  			onChange={props.onChange} 
	  			>
	  			</textarea>
	  	</div>
			}
			<div className= {props.isHidden === true ? "continue__button--wrap hidden" : "continue__button--wrap"}>
	    <input type="submit" className="button__continue submit"></input>
			</div>
	    </form>
	}
	  <div className={props.isHidden === false ? "continue__button--wrap hidden" : "continue__button--wrap"}>
		<button 
		className="button__continue" 
		onClick={props.slideChange} 
		>Continue</button>
	  </div>
	  </li>
	);
  
}

export default CarouselSlide;