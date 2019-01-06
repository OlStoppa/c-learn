import React from 'react';
import CarouselIndicator from './CarouselIndicator';
import CarouselSlide from './CarouselSlide';
import { withRouter } from "react-router-dom";
import { database } from '../firebase/firebase';


class Carousel extends React.Component {
  constructor(props) {
		super(props);

		this.goToSlide = this.goToSlide.bind(this);
		this.goToPrevSlide = this.goToPrevSlide.bind(this);
		this.goToNextSlide = this.goToNextSlide.bind(this);
		this.incrementProgress = this.incrementProgress.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.onRadioChange = this.onRadioChange.bind(this);
		

		this.state = {
			mode: props.location.state.mode,
			activeIndex: 0,
			progress: 0,
			value: '',
			type: '',
			hidden: false,
			radio: []
		};
	}
	
	onRadioChange(id,e) {
		let radio = [...this.state.radio];
		radio[id] = e.target.value;
		this.setState({	
				radio: [...radio],
				hidden: false
			 });
			
}
		

  handleChange(event){
  	this.setState({
			value: event.target.value,
			type: event.target.name,
			hidden: false	
		});	
  }

  goToSlide(index) {
		const set = this.props.slides[index].noSubmit ? true : false;
  	if(this.state.progress >= index) {
			this.setState({
				activeIndex: index,
				hidden: set
			});
		}
	}
	handleClick(e) {
	
		const { type, value, activeIndex } = this.state;
		if(type === "gap"){
			if(value !== this.props.slides[activeIndex].solution){
				alert("incorrect");
				return 
			}
		}else{
			database.ref(this.state.activeIndex).set(this.state.value);
		}
		this.incrementProgress(e);
	} 

  goToPrevSlide(e) {
	e.preventDefault();

		let index = this.state.activeIndex;
		let { slides } = this.props;
		let slidesLength = slides.length;

		if (index < 1) {
	  	index = slidesLength;
		}

		--index;

		this.setState({
	  	activeIndex: index
		});
  }

  goToNextSlide(e) {
	e.preventDefault();

	let index = this.state.activeIndex;
	let { slides } = this.props;
	let slidesLength = slides.length - 1;

	if(index == slidesLength){
		this.props.history.push(`/${this.state.mode}`);
	}
	else{

	++index;
	const set = slides[index].noSubmit ? true : false;
	if(slides[index].correct){
		this.setState({value: slides[index].correct });
	}

	this.setState({
		activeIndex: index,
		hidden: set
		});
	}
  }
  incrementProgress() {
		let inc = 1;	
		const { slides } = this.props;
		const { progress, activeIndex } = this.state;
		if(activeIndex == slides.length - 1){	
			this.setState({hidden: true});
		}
		else{
			this.setState((prevState) => {
				return { 	
					hidden: !prevState.hidden
				};
			});

  	if (slides[activeIndex + 1].noSubmit === true){
  		inc += 1;
		}  
		else if (slides[activeIndex + 1].noSubmit === true && slides[activeIndex + 2].noSubmit === true) {
  	 	inc += 1;
  	}

  	if(progress - activeIndex < 1 && progress < slides.length) { 
  		this.setState((prevState) => {
  			return { 
					progress: prevState.progress + inc,
					hidden: true
  			};
  		});
		}
	}
  }


 
  render() {
	return (
		
	  <div className="carousel">
	  
	  <ul className="carousel__indicators">
		  {this.props.slides.map((slide, index) =>
			<CarouselIndicator
			  key={index}
			  index={index}
			  activeIndex={this.state.activeIndex}
			  onClick={e => this.goToSlide(index)}
			  progress={this.state.progress}
			/>
		  )}
		</ul>
		
		<ul className="carousel__slides">
		  {this.props.slides.map((slide, index) =>
			<CarouselSlide
			  key={index}
			  index={index}
				activeIndex={this.state.activeIndex}
				value={this.state.value}
			  slide={slide}
			  slideChange={this.goToNextSlide}
			  progress={this.state.progress}
				onChange={this.handleChange}
				isHidden={this.state.hidden}
				handleSubmit={this.handleClick}
				onRadioChange={this.onRadioChange}
			/>
		  )}
		</ul>
		
		</div> 
	);
  }
}

export default withRouter(Carousel);
