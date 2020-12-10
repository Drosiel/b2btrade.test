import React, { Component } from 'react';
import Slider from 'react-slick';
import img from '../../img/slider.jpg';

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return (
			<div>
				<Slider {...settings}>
					<div className='slider__inner'>
						<img src={img} alt='слайдер' />
					</div>
				</Slider>
			</div>
		);
	}
}
