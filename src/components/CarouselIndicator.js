import React from 'react';

// Component for carousel indicator
class CarouselIndicator extends React.Component {
  render() {
	return (
	  <li>
		<a
		  className={
			this.props.index == this.props.activeIndex
			  ? "carousel__indicator carousel__indicator--active"
			  : "carousel__indicator"
		  }
		  onClick={this.props.onClick}
		><span>{this.props.index % 2 === 0 ? "-" : "?"}</span></a>
	  </li>
	);
  }
}

export default CarouselIndicator;