import { useState, React } from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';
import dsc from '../media/DSC.png';
import scr from '../media/SCR.png';
import gotg from '../media/big.png';
import rfp from '../media/RFP.png';
import ca from '../media/big.png';
import tcd from '../media/freshly.png';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCss3Alt,
	faDocker,
	faHtml5,
	faJs,
	faReact,
	faBootstrap,
} from '@fortawesome/free-brands-svg-icons';

const Experience = ({ darkMode }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div data-theme={darkMode ? 'dark' : 'light'}>
			<br></br>
			<Fade>
				<Container>
					<br></br>
					<h2 className="lead" align="center">
						<b>- Projects -</b>
					</h2>
					<br></br>
					<Zoom>
						<Row>
							<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={tcd} />
													<Card.Body>
														<Card.Title align="center">
															Freshly.com(Clone)
														</Card.Title>
														<Card.Text>
															<p align="center">
																A Web Application where user can
																Order food.
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														A Food Ordering Web Application where
														users can login to the site and add
														their favourite dishes to the cart and
														User can also sort and filter his
														favorite foods and pay the payment and
														the dishes get delivered to their
														Residentail Home Address provided in
														the site.
													</p>
													<Button
														variant={
															darkMode
																? 'outline-light'
																: 'outline-dark'
														}
														className="skills-btn"
													>
														<FontAwesomeIcon
															className="skill"
															size="2x"
															icon={faHtml5}
														/>
													</Button>
													<Button
														variant={
															darkMode
																? 'outline-light'
																: 'outline-dark'
														}
														className="skills-btn"
													>
														<FontAwesomeIcon
															className="skill"
															size="2x"
															icon={faCss3Alt}
														/>
													</Button>
													<Button
														variant={
															darkMode
																? 'outline-light'
																: 'outline-dark'
														}
														className="skills-btn"
													>
														<FontAwesomeIcon
															className="skill"
															size="2x"
															icon={faJs}
														/>
													</Button>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://clonefreshly.netlify.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/avinashkvar/freshly.git"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>
							{/* <Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={gotg} />
													<Card.Body>
														<Card.Title align="center">
															BigBasket.com(Clone)
														</Card.Title>
														<Card.Text>
															<p align="center">
																A Web Application where user can
																order ther Grocery products.
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														This is an Grocery Ordering Web
														Application where the customers can
														login and go through all the items i.e
														vegetables,fruits,staples,cosmetic so
														on & then they can add the items
														according to their cart and pay for
														the above items via card or cash, the
														items get delivered. Thank You for
														ordering
													</p>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<Modal
											show={show}
											onHide={handleClose}
											className="modal"
										>
											<Modal.Body>
												Heya! The project is in development mode,
												you can visit the repository and have a
												look. Feel free to contribute!
											</Modal.Body>
											<Modal.Footer>
												<Button
													variant="outline-dark"
													onClick={handleClose}
												>
													Close
												</Button>
												<a
													href="https://github.com/Tejaswi-Chaudhari/Gift-of-the-Gab"
													target="_blank"
													rel="noreferrer noopener"
												>
													<Button variant="outline-dark">
														View Github Repo
													</Button>
												</a>
											</Modal.Footer>
										</Modal>
										<Button
											variant={
												darkMode ? 'outline-light' : 'outline-dark'
											}
											onClick={handleShow}
											className="sbtn"
										>
											View Project
										</Button>
										<a
											href="https://github.com/Tejaswi-Chaudhari/Gift-of-the-Gab"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col> */}
							<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={ca} />
													<Card.Body>
														<Card.Title align="center">
															BigBasket.com(Clone)
														</Card.Title>
														<Card.Text>
															<p align="center">
																A Web Application where user can
																order ther Grocery products.
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														This is an Grocery Ordering Web
														Application where the customers can
														login and go through all the items i.e
														vegetables,fruits,staples,cosmetic so
														on & then they can add the items
														according to their cart and pay for
														the above items via card or cash, the
														items get delivered. Thank You for
														ordering
													</p>
													<Button
														variant={
															darkMode
																? 'outline-light'
																: 'outline-dark'
														}
														className="skills-btn"
													>
														<FontAwesomeIcon
															className="skill"
															size="2x"
															icon={faHtml5}
														/>
													</Button>
													<Button
														variant={
															darkMode
																? 'outline-light'
																: 'outline-dark'
														}
														className="skills-btn"
													>
														<FontAwesomeIcon
															className="skill"
															size="2x"
															icon={faCss3Alt}
														/>
													</Button>
													<Button
														variant={
															darkMode
																? 'outline-light'
																: 'outline-dark'
														}
														className="skills-btn"
													>
														<FontAwesomeIcon
															className="skill"
															size="2x"
															icon={faJs}
														/>
													</Button>
													<Button
														variant={
															darkMode
																? 'outline-light'
																: 'outline-dark'
														}
														className="skills-btn"
													>
														<FontAwesomeIcon
															className="skill"
															size="2x"
															icon={faBootstrap}
														/>
													</Button>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://bigbasket.vercel.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/avinashkvar/bigbasket.git"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>
						</Row>
					</Zoom>
					<br></br>
					<Zoom>
						<Row>
							{/* <Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={rfp} />
													<Card.Body>
														<Card.Title align="center">
															Rooted - Portal for farmers
														</Card.Title>
														<Card.Text>
															<p align="center">
																Developed a Portal for Farmers
																to sell their goods at a better
																rate.
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														User-friendly and clean basic scripted
														website
														<br></br>Tech Stack - HTML, CSS,
														JavaScript
													</p>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://rooted-portal.netlify.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Project
											</Button>
										</a>
										<a
											href="https://github.com/SheHacks-Hack-O-holics/SheHacks"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Github Repo
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col>
							<Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={dsc} />
													<Card.Body>
														<Card.Title align="center">
															Google Developer Student Clubs
														</Card.Title>
														<Card.Text>
															<p align="center">
																Worked as a core team member of
																GDSC UMIT
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														Organized Study Jams, Hackathons and
														Webinars.
														<br></br>Hosted events of Google Cloud
														and Machine Learning.
														<br></br>Guided students in Google
														Cloud and Android Development Study
														Jams
													</p>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://dscumit.netlify.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												View Website
											</Button>
										</a>
										<a
											href="https://www.instagram.com/dsc__umit/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												Instagram Handle
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col> */}
							{/* <Col lg={4} sm={12}>
								<Card
									align="center"
									className="exp"
									data-theme={darkMode ? 'dark' : 'light'}
								>
									<br></br>
									<center>
										<div class="flip-card">
											<div class="flip-card-inner">
												<div className="flip-card-front">
													<Card.Img variant="top" src={scr} />
													<Card.Body>
														<Card.Title align="center">
															Student Council
														</Card.Title>
														<Card.Text>
															<p align="center">
																Representative of Department of
																Computer Science and Technology,
																UMIT
															</p>
														</Card.Text>
													</Card.Body>
												</div>
												<div className="flip-card-back">
													<p>
														Managed and helped students in their
														curriculum and other difficulties.
														<br></br>Co-organized annual fest
														'Arcane Illusions'.
														<br></br>Coordinated between faculties
														and students about studies and other
														activities.
													</p>
												</div>
											</div>
										</div>
									</center>
									<br></br>
									<div>
										<a
											href="https://www.instagram.com/umit_sc/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<Button
												variant={
													darkMode
														? 'outline-light'
														: 'outline-dark'
												}
												className="sbtn"
											>
												Instagram Handle
											</Button>
										</a>
									</div>
									<br></br>
								</Card>
							</Col> */}
						</Row>
					</Zoom>
				</Container>
			</Fade>
			<br></br>
			<hr></hr>
			<br></br>
		</div>
	);
};

export default Experience;
