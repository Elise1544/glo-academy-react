// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import "./index.css";

const Button = ({text, className}) => {
	return (
		<button className={className}>
			<span>{text}</span>
		</button>
	);
};

const Phone = ({link, text, className}) => {
	return (
		<a className={className} href={link}>
			{text}
		</a>
	);
};

class Header extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<div className="header">
					<a href="#">
						<div className="header-logo"></div>
					</a>
					<Phone link="tel:888" className="header-phone"></Phone>
					<div className="header-phonelink">
						<Phone link="tel:7(962)556-1234" text="+7(962)556-1234"></Phone>
					</div>
				</div>
			</div>
		);
	}
}

class Main extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
					<div className="main-small">
						Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
						несколько абзацев более.
					</div>

					<Button text="Подробнее" className="btn main-btn"></Button>
				</div>
			</div>
		);
	}
}

class Feature extends React.Component {
	renderSliderItem(count, text) {
		const sliderItemStyle = {
			backgroundImage: `url(./images/${count}.svg)`,
		};
		return (
			<div className="features-slider_item">
				<div className="features-img" style={sliderItemStyle}></div>
				<div className="features-feature">{text}</div>
			</div>
		);
	}

	render() {
		return (
			<div className="wrapper">
				<div className="features-wrapper">
					<h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
					<div className="features-subhead">О нас</div>
					<div className="features-description">
						Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
						осмысленного текста рыбы на русском языке, а начинающему оратору отточить.
					</div>
					<div className="features-slider">
						<div className="features-slider_items">
							{this.renderSliderItem('1', 'Первое целевое преимущество')}
							{this.renderSliderItem('2', 'Второе целевое преимущество')}
							{this.renderSliderItem('3', 'Третье целевое преимущество')}
							{this.renderSliderItem('4', 'Четвертое целевое преимущество')}
						</div>

						<button className="features-slider-arrow features-slider-prev">
							<svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"></path>
							</svg>
						</button>
						<button className="features-slider-arrow features-slider-next">
							<svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

class Contact extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<div className="contact-wrapper">
					<h2 className="contact-title">Остались вопросы?</h2>
					<div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
					<form action="../mailer.smart.php" className="contact-form">
						<input type="text" placeholder="Ваше имя" />
						<input type="tel" placeholder="Телефон" /> <input type="email" placeholder="E-mail" />
						<Button text="Позвоните мне" className="btn contact-btn"></Button>
					</form>
					<div className="contact-personal">
						Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
					</div>
				</div>
			</div>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="footer-logo"></div>
				<div className="footer-company">
					<span>© 2020 XXXcompany. Все права защищены.</span>
				</div>
				<Phone link="tel:888" className="footer-phone"></Phone>

				<div className="footer-websurfer">
					<span className="footer-websurfer_build">Сделано</span> <a href="#">Ваше имя</a>
				</div>
				<div className="footer-phonelink">
					<Phone link="tel:888" text="+7(962)556-1234"></Phone>
				</div>
			</div>
		);
	}
}

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<header>
					<Header />
				</header>
				<main>
					<Main />
				</main>
				<section className="features">
					<Feature />
				</section>
				<section className="contact">
					<Contact />
				</section>
				<footer>
					<Footer />
				</footer>
			</div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LandingPage />);
