import React from 'react';
import Header from './Header';
import CarouselIndicator from './CarouselIndicator';
import CarouselSlide from './CarouselSlide';


class Carousel extends React.Component {
  constructor(props) {
	super(props);

	this.goToSlide = this.goToSlide.bind(this);
	this.goToPrevSlide = this.goToPrevSlide.bind(this);
	this.goToNextSlide = this.goToNextSlide.bind(this);

	this.state = {
	  activeIndex: 0
	};
  }

  goToSlide(index) {
	this.setState({
	  activeIndex: index
	});
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

	if (index === slidesLength) {
	  index = -1;
	}

	++index;

	this.setState({
	  activeIndex: index
	});
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
			/>
		  )}
		</ul>
		

		<ul className="carousel__slides">
		  {this.props.slides.map((slide, index) =>
			<CarouselSlide
			  key={index}
			  index={index}
			  activeIndex={this.state.activeIndex}
			  slide={slide}
			/>
		  )}
		</ul>
		<div className='continue__button--wrap'>
		<button className="button__continue" onClick={this.goToNextSlide}>Continue</button>
		</div>
		</div> 
	);
  }
}

export default Carousel;
