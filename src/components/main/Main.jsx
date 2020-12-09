import React from 'react';
import slider from '../../img/slider.jpg';
import svg from '../../img/style.svg';

import newsdb from '../../general/news';
import products from '../../general/products';

export const Main = () => {
	return (
		<div className='main'>
			<div className='slider container'>
				<div className='slider__inner'>
					<img src={slider} alt='' />
				</div>
			</div>

			<section className='section container'>
				<div className='section__top'>
					<h2 className='section__title'>Новости</h2>
					<a href='#' className='section__more'>
						<span>Посмотреть всё</span>
						<svg className='section__icon'>
							<use href={`${svg}#arrow-right`} />
						</svg>
					</a>
				</div>

				<div className='section__body'>
					<div className='grid grid--2 news'>
						{newsdb.map((news) => (
							<div className='grid__item'>
								<div className='article'>
									<div className='article__img'></div>
									<div className='article__content'>
										<div className='article__title'>
											{news.title}
										</div>
										<div className='article__date'>
											{news.date}
										</div>
										<div className='article__text'>
											{news.text}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='section container'>
				<div className='section__top'>
					<h2 className='section__title'>Товары</h2>
					<a href='#' className='section__more'>
						<span>Посмотреть всё</span>
						<svg className='section__icon'>
							<use href={`${svg}#arrow-right`} />
						</svg>
					</a>
				</div>

				<div className='section__body'></div>
			</section>

			<section className='section container'>
				<div className='section__top'>
					<h2 className='section__title'>Поставщики</h2>
					<a href='#' className='section__more'>
						<span>Посмотреть всё</span>
						<svg className='section__icon'>
							<use href={`${svg}#arrow-right`} />
						</svg>
					</a>
				</div>

				<div className='section__body'>
					<div className='grid'>
						{products.map((prod) => (
							<div className='grid__item'>
								<div className='card'>
									<div className='card__img'></div>
									<div className='card__content'>
										<div className='card__top'>
											<div className='card__title'>
												{prod.title}
											</div>
											<svg className='card__icon'>
												<use
													href={`${svg}#heart-active`}
												/>
											</svg>
										</div>
										<div className='card__text'>
											{prod.text}
										</div>
										<div className='card__bottom'>
											<div className='card__price'>
												{prod.price}
												<span>руб</span>
											</div>
											<button className='btn card__basket'>
												<svg className='card__basket-icon'>
													<use
														href={`${svg}#basket`}
													/>
												</svg>
												<span>в корзину</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='section container'>
				<div className='section__top'>
					<h2 className='section__title'>Закупки</h2>
					<a href='#' className='section__more'>
						<span>Посмотреть всё</span>
						<svg className='section__icon'>
							<use href={`${svg}#arrow-right`} />
						</svg>
					</a>
				</div>

				<div className='section__body'>
					<div className='grid'>
						{products.map((prod) => (
							<div className='grid__item'>
								<div className='card'>
									<div className='card__img'></div>
									<div className='card__content'>
										<div className='card__top'>
											<div className='card__title'>
												{prod.title}
											</div>
											<svg className='card__icon'>
												<use
													href={`${svg}#heart-active`}
												/>
											</svg>
										</div>
										<div className='card__text'>
											{prod.text}
										</div>
										<div className='card__bottom'>
											<button className='btn btn--dark card__basket'>
												<svg className='card__basket-icon'>
													<use
														href={`${svg}#basket`}
													/>
												</svg>
												<span>в корзину</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Main;
