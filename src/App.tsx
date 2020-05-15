import React from 'react';
import {Carousel, Col, Container, Figure, Image, Nav, Navbar, Row, Form, InputGroup, Button} from "react-bootstrap";
import {Element} from "react-scroll/modules";
import Hunters from "./components/Hunters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

import Parallax from "./components/Parallax";
import { scroller } from 'react-scroll';

function App() {

	const scrollTo = ( element:string ) => {
		return ( event:any ) => {
			scroller.scrollTo( element, {
				duration: 800,
				delay: 0,
				smooth: 'easeInOutQuart',
				offset: -56
			})
		}
	}

	return (
		<div className="App">

			<Container>
				<Row className="LayoutRow">
					<Col lg={4} className="RedColumn">
						<div className="sticky-top">
							<img src={Hunters.Images.logoWhite} />

							<div className="motto">
								Your One Stop Shop For High Quality Roofing And Siding Projects
							</div>

							<div className="contact">
								<span className="email">hunterexteriorsvernon@gmail.com</span><br/>
								<span className="phone">(250) 306 - 6638</span><br/><br/>
								<a href="https://www.facebook.com/hunterexteriors/" target="social">
									<FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#FFF"/>
								</a>
							</div>

						</div>
					</Col>
					<Col lg={7} className="WhiteColumn">

						<Element name="home" />

						<Carousel>
							<Carousel.Item>
								<img src={Hunters.Images.experts} className="d-block w-100" style={{ height: '350px', objectFit:'cover' }} />
							</Carousel.Item>
							<Carousel.Item>
								<img src={Hunters.Images.seamlessEaves} className="d-block w-100" style={{ height: '350px', objectFit:'cover' }} />
							</Carousel.Item>
							<Carousel.Item>
								<img src={Hunters.Images.callToday} className="d-block w-100" style={{ height: '350px', objectFit:'cover' }} />
							</Carousel.Item>
							<Carousel.Item>
								<img src={Hunters.Images.springSavings} className="d-block w-100" style={{ height: '350px', objectFit:'cover' }} />
							</Carousel.Item>
						</Carousel>

						<Navbar bg="danger" variant="dark" className="sticky-top" style={{ marginRight: "-5%"}}>
							<Nav className="ml-auto">
								<Nav.Link onClick={scrollTo('home')}>Home</Nav.Link>
								<Nav.Link onClick={scrollTo('services')}>Services</Nav.Link>
								<Nav.Link onClick={scrollTo('quote')}>Get a Quote</Nav.Link>
							</Nav>
						</Navbar>

						<div className="page">
							<h1>It's More Than Just a Roof</h1>
							<p>A roof is more than simply a covering for the top of your house. It keeps the elements at bay while giving your property a distinctive look. If you’re looking for a professional roof installer, Hunter Exteriors has your home covered. Specializing in Sloped Roofing and Siding, Hunter Exterior offers a variety of products to make your house SHINE again!</p>
							<p>Here at Hunter Exteriors we understand how important your house is to you not only as an investment but also as a place you can be proud to call your home. We take that to heart and are proud to offer the highest quality work at affordable prices. Making our customers happy and making your house shine is our ultimate goal whether that be a new roof, siding project or simply some repairs to keep your house looking and performing like it should!</p>
						</div>

						<Element name="services" />

						<div className="page">
							<h1>Our Services</h1>

							<Row className="gallery">
								<Col xs={6}>
									<Figure onClick={scrollTo('iko-armour')}>
										<Figure.Image src={Hunters.Images.ikoArmourZoomOut} rounded />
										<Figure.Caption>
											IKO Armour Shake Installation
										</Figure.Caption>
									</Figure>
								</Col>
								<Col xs={6}>
									<Figure onClick={scrollTo('hardie')}>
										<Figure.Image src={Hunters.Images.hardie2} rounded />
										<Figure.Caption>
											James Hardie Plank Installation
										</Figure.Caption>
									</Figure>
								</Col>
							</Row>

						</div>

						<Element name="hardie" />

						<div className="page">
							<h1>Certified James Hardie Siding Installation</h1>
							<p>We're certified James Hardie installers. That means that you'll not only have Hardie installed
							on the side of you house, but you'll have it installed right the first time and backed by industry leaders.</p>

							<Parallax img={Hunters.Images.hardie2}>
								Are you concerned that wooden or vinyl siding will break down in the Okanagan elements?
								James Hardie Siding could be the solution to your problem!
							</Parallax>

							<h3>Why Choose Hardie Board Siding?</h3>

							<Hunters.ListItem number={1} title="Fire Rated and Non-Combistible">
								James Hardie Siding is Fire Rated and Non Combustible making it a much safer option than
								traditional vinyl or wooden siding that will easily burn or melt if exposed to fire or
								an intense heat scenario
							</Hunters.ListItem>

							<Hunters.ListItem number={2} title="Insurance Premiums">
								Insurance Premiums can potentially be cheaper for homeowners that use Hardie Siding over
								traditional vinyl and wooden siding
							</Hunters.ListItem>

							<Hunters.ListItem number={3} title="Fantastic Warranties">
								Depending on the specific product you decide to use you will be entitled to anywhere
								from a 10 year to a lifetime warranty! Most James Hardie Siding products carry a 30 year
								warranty
							</Hunters.ListItem>

							<Hunters.ListItem number={4} title="Incredibly Durable And Protective">
								Hardie Siding is Incredibly durable and is 5 times thicker than vinyl siding. This means that not only will your siding last much longer it will also protect your home much better
							</Hunters.ListItem>

							<Hunters.ListItem number={5} title="Extreme Weather Resistance">
								James Hardie Siding is extremely weather resistant and was made to withstand winds up to 240 Kilometers an hour! That is 150 Miles an hour! Weather conditions that could easily damage vinyl siding such as hail can be easily handled by Hardie Board. Hardie Board is also highly resistant to warping, rotting, and cracking which are common issues with wooden siding.
							</Hunters.ListItem>

							<Hunters.ListItem number={6} title="Amazing Color">
								Hardie Siding is extremely flexible when it comes to color. It uses ColorPlus Technology finishes that are baked on and offer up to 30 percent improvement when it comes to fade resistance over other options. The colors are computer matched so it is as consistent as it gets. When it comes to wood and vinyl siding the color consistency and fade resistance simply do not match up to Hardie Board and when repairs are needed it is much harder to match the color perfectly
							</Hunters.ListItem>

							<Hunters.ListItem number={7} title="Looks And Performance">
								Hardie Siding provides the same beautiful wood grain finish as traditional wooden siding without the issues of wood and without the cheaper plastic look of vinyl
							</Hunters.ListItem>

						</div>

						<Element name="iko-armour" />

						<div className="page">

							<h1>IKO ArmourShake Premium Shingles</h1>
							<p>In need of a new roof? If so you would be wise to consider IKO ArmourShake Premium Shingles. These designer shingles are a high performance asphalt shingle with many benefits over traditional asphalt shingles especially in the Okanagan where we experience all types of weather.</p>

							<Parallax img={Hunters.Images.ikoArmour}>
								With ArmourShake Premium Shingles you can feel confident that your roof will stand up to all the Okanagan elements.
							</Parallax>

							<h3>Benefits Of IKO ArmourShake Shingles</h3>

							<Hunters.ListItem number={1} title="Algae Resistant ">
								Special algae resistant granules are embedded into these shingles to help prevent the growth of blue-green algae that can cause discoloration and unsightly black stains and streaks on your roof
							</Hunters.ListItem>

							<Hunters.ListItem number={2} title="UV Resistant ">
								Special UV reflective granules are embedded in these shingles helping to prevent discoloration that can occur as a result of prolonged exposure to the suns powerful UV rays
							</Hunters.ListItem>

							<Hunters.ListItem number={3} title="Resilient Strength and Flexibility ">
								Fiberglass mats at their core coated with weathering asphalt allow for these shingles to boast superior strength and flexibility
							</Hunters.ListItem>

							<Hunters.ListItem number={4} title="Extra Strong Bonding ">
								IKO Fast-lock sealant strips are activated by the sun creating an ultra tough bond preventing potential lifting from wind
							</Hunters.ListItem>

							<Hunters.ListItem number={5} title="Fast, Easy Installs ">
								Fast easy installs save you time and money and make these high quality premium shingles reasonably priced
							</Hunters.ListItem>

							<Hunters.ListItem number={6} title="Beautiful Color Options ">
								Mimicking the beautiful in demand look of wood shakes without the yearly maintenance costs and while providing better protection for your home these singles are truly the best of both worlds, looking and performing amazing. The subtle color gradients are similar to the luxurious look of random cut cedar wood shakes at a much more reasonable cost. Made with advanced color blending technology and deep cuts these premium laminated shingles look and perform amazing
							</Hunters.ListItem>

						</div>

						<Element name="quote" />

						<div className="page">
							<h1>Get a Quote</h1>
							<p>Fill out this form and provide us some details and we'll give you a call back as soon as possible.</p>

							<Form>
								<Form.Row>
									<Col>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>First Name</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control type={"text"}/>
										</InputGroup>
									</Col>
									<Col>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>Last Name</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control type={"text"}/>
										</InputGroup>
									</Col>
								</Form.Row>
								<Form.Row>
									<Col>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>Email Address</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control type={"text"}/>
										</InputGroup>
									</Col>
								</Form.Row>
								<Form.Row>
									<Col>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>Phone</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control type={"text"}/>
										</InputGroup>
									</Col>
								</Form.Row>
								<Form.Row>
									<Col>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>Details of Job</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control as={"textarea"}/>
										</InputGroup>
									</Col>
								</Form.Row>
								<Form.Row>
									<Col lg={8}/>
									<Col lg={4}>
										<Button className="btn-block" variant="primary">Request a Quote!</Button>
									</Col>
								</Form.Row>
							</Form>
						</div>

					</Col>
					<Col lg={1} className="RedColumn">&nbsp;</Col>
				</Row>
			</Container>

		</div>
	);
}

export default App;
