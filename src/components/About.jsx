import React from 'react';
import { Fade, Flip } from 'react-awesome-reveal';
import './styles.css';
import connectLight from '../media/connect-light1.svg';
import profile from '../media/profilepic.jpg';
import resume from '../media/Avinash k.pdf';
import transcript from '../media/TejaswiChaudhari_transcript.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope ,faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About = ({ darkMode }) => {
	var TxtRotate = function (el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtRotate.prototype.tick = function () {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

		var that = this;
		var delta = 300 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function () {
			that.tick();
		}, delta);
	};

	window.onload = function () {
		var elements = document.getElementsByClassName('txt-rotate');
		for (var i = 0; i < elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-rotate');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtRotate(elements[i], JSON.parse(toRotate), period);
			}
		}

		var css = document.createElement('style');
		css.type = 'text/css';
		css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
		document.body.appendChild(css);
	};

	return (
		<div>
			<br></br>
			<br></br>
			<Fade>
				<Container align="center">
					<Row>
						<Col lg={8} align="center">
							<Card className="nbcard">
								<Card.Body>
									<Card.Title>
										<h2 className="lead">
											Let's have an introduction!
										</h2>
									</Card.Title>
									<br></br>
									<Card.Text>
										<p>
											I am a <strong>passionate developer</strong>{' '}
											Many things excite me in this expanse of
											technology, and I like to explore and keep my
											options open all the time. I am up for
											challenges that take me by surprise and make my
											head hurt. I'm comfortable working on any
											domain if I find the project is worth it. You
											can imagine me focused on the laptop screen and
											typing or taking down notes. Apart from
											technical things, I enjoy comics and playing
											cricket<br></br>
											Now that you know me a bit, please feel free to
											drop a text because{' '}
											<strong>
												Communication is a two-way street.
											</strong>
										</p>
									</Card.Text>
									<a
										href={resume}
										target="_blank"
										rel="noreferrer noopener"
									>
										<Button
											variant={
												darkMode ? 'outline-light' : 'outline-dark'
											}
											className="a"
										>
											<FontAwesomeIcon
												className="dark"
												size="lg"
												icon={faFile}
											/>{' '}
											View Resume
										</Button>
									</a>
									<a href={resume} download>
										<Button
											variant={
												darkMode ? 'outline-light' : 'outline-dark'
											}
											className="a"
										>
											<FontAwesomeIcon
												className="dark"
												size="lg"
												icon={faFile}
											/>{' '}
											Download Resume
										</Button>
									</a>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<img src={profile} alt="" className={darkMode ? "profilepic-dark" : "profilepic-light"} />
						</Col>
						{/* <Col lg={4} align="center">
							<Card className="nbcard">
								<Card.Body>
									<Card.Title>
										<h2 className="lead">Let's Connect!</h2>
									</Card.Title>
									<br></br>
									<a
										href="https://www.linkedin.com/in/avinash-k-8691021a8/"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Button
											variant={
												darkMode ? 'outline-light' : 'outline-dark'
											}
											className="a"
										>
											<FontAwesomeIcon
												className="dark"
												size="lg"
												icon={faLinkedin}
											/>{' '}
											Avinash K
										</Button>
									</a>
									<a
										href="https://github.com/avinashkvar"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Button
											variant={
												darkMode ? 'outline-light' : 'outline-dark'
											}
										>
											<FontAwesomeIcon
												className="dark"
												size="lg"
												icon={faGithub}
											/>{' '}
											Avinash K
										</Button>
									</a>
									<Button
										variant={
											darkMode ? 'outline-light' : 'outline-dark'
										}
									>
										<FontAwesomeIcon
											className="dark"
											size="lg"
											icon={faEnvelope}
										/>{' '}
										avinashk17avi@gmail.com
									</Button>
									<Button
										variant={
											darkMode ? 'outline-light' : 'outline-dark'
										}
									>
										<FontAwesomeIcon
											className="dark"
											size="lg"
											icon={faPhoneAlt}
										/>{' '}
										+91 9110434503
									</Button>
									
									<img
										src={darkMode ? connectDark : connectLight}
										alt="connect"
										className="connect-img img-fluid animated"
									/>
								</Card.Body>
							</Card>
						</Col> */}
					</Row>
					<br></br>
					<hr></hr>
					<br></br>
				</Container>
			</Fade>
		</div>
	);
};

export default About;
