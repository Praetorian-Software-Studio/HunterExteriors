import React from 'react';
import {Carousel, Col, Container, Figure, Image, Nav, Navbar, Row, Form, InputGroup, Button} from "react-bootstrap";
import {Element} from "react-scroll/modules";
import Hunters from "./components/Hunters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

import Parallax from "./components/Parallax";
import { scroller } from 'react-scroll';
import Quote from "./components/Quote";

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
					<Col lg={4} md={12} className="RedColumn">
						<div className="sticky-top">
							<img src={Hunters.Images.logoWhite} />

							<div className="motto">
								Done Right the First Time
							</div>

							<div className="contact" style={{ paddingBottom: '35px' }}>
								<span className="email">
									<a href={"mailto:hunterexteriorsvernon@gmail.com"}>hunterexteriorsvernon@gmail.com</a>
								</span><br/>
								<span className="phone">(250) 306 - 6638</span><br/><br/>
								<a href="https://www.facebook.com/hunterexteriors/" target="social">
									<FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#FFF"/>
								</a>

								<div className={"scroll-down"}>
									Scroll Down for our Services!
								</div>
							</div>

						</div>
					</Col>
					<Col lg={7} md={12} className="WhiteColumn">

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

						<Navbar bg="dark" variant="dark" className="main-nav sticky-top">
							<Nav className="ml-auto">
								<Nav.Link onClick={scrollTo('home')}>Home</Nav.Link>
								<Nav.Link onClick={scrollTo('quote')}>Get a Quote</Nav.Link>
								<Nav.Link onClick={scrollTo('services')}>Services</Nav.Link>
							</Nav>
						</Navbar>

						<div className="page">
							<h1>It's More Than Just a Roof</h1>
							<p>A roof is more than simply a covering for the top of your house. It keeps the elements at bay while giving your property a distinctive look. If you’re looking for a professional roof installer, Hunter Exteriors has your home covered. Specializing in Sloped Roofing and Siding, Hunter Exterior offers a variety of products to make your house SHINE again!</p>
							<p>Here at Hunter Exteriors we understand how important your house is to you not only as an investment but also as a place you can be proud to call your home. We take that to heart and are proud to offer the highest quality work at affordable prices. Making our customers happy and making your house shine is our ultimate goal whether that be a new roof, siding project or simply some repairs to keep your house looking and performing like it should!</p>
						</div>

						<Element name="quote" />

						<div className="page">
							<h1>Get a Quote</h1>

							<p>I provide free quotes and inspections on all roofs, soffits, facia, and siding projects.</p>

							<Quote/>

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
								<Col xs={6}>
									<Figure onClick={scrollTo('iko-cambridge')}>
										<Figure.Image src={Hunters.Images.ikoCambridge} rounded />
										<Figure.Caption>
											IKO Cambridge Installation
										</Figure.Caption>
									</Figure>
								</Col>
								<Col xs={6}>
									<Figure onClick={scrollTo('gutters')}>
										<Figure.Image src={Hunters.Images.gutters} rounded />
										<Figure.Caption>
											Continuous Gutters
										</Figure.Caption>
									</Figure>
								</Col>
								<Col xs={12}>
									<Figure onClick={scrollTo('other-services')}>
										<Figure.Image src={Hunters.Images.soffits} rounded style={{ objectPosition: "center -100px" }}/>
										<Figure.Caption>
											Soffits, Facia & Siding Installations & Repair
										</Figure.Caption>
									</Figure>
								</Col>
							</Row>

						</div>

						<Element name="hardie" />

						<div className="page">
							<h1>James Hardie Siding Installation</h1>
							<p>We're experienced James Hardie installers. That means that you'll not only have Hardie installed
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

						<Element name="iko-cambridge" />

						<div className="page">
							<h1>IKO Cambridge</h1>
							<p>IKO Cambridge architectural shingles can enhance any home’s style, from traditional to modern, rustic to urban. Their dimensional profile and deep shadow bands evoke the upscale  appearance of natural wood shakes, creating a high-end designer look at an affordable cost.</p>

							<Parallax img={Hunters.Images.ikoCambridgeRoof}>
								High-quality roofing shingles provide superior weather protection and boost the curb appeal of homes throughout the United States and Canada
							</Parallax>

							<Hunters.ListItem number={1} title="Engineered for the Elements">
								IKO Cambridge shingles are engineered to withstand the elements for years, making them one of the most durable shingles you can buy.
							</Hunters.ListItem>

							<Hunters.ListItem number={2} title="Full Range of Colours">
								Thanks to their exclusive, advanced color blending technology, IKO Cambridge architectural roofing shingles are available in a full range of color blends (including Cool Colors for select markets). This is just one great reason why IKO Cambridge remains among our most popular shingles with homeowners and contractors alike.
							</Hunters.ListItem>

							<Hunters.ListItem number={3} title="The Size Advantage">
								These shingles come in IKO’s special “Advantage” size which is larger than many competitors’ comparable product. This means roofers can install these shingles faster and their larger-than-average exposure creates greater visual interest, giving your home a spectacular designer look.
							</Hunters.ListItem>

							<Hunters.ListItem number={4} title="Guard Your Home">
								IKO Cambridge shingles protect your home from algae and blow-offs with their exceptional bonding and fiberglass mat for inner core strength.
							</Hunters.ListItem>

							<Hunters.ListItem number={5} title="Heavy Duty">
								IKO Cambridge roofing shingles are built heavy-duty. You can see and feel the difference. Touch one. Feel its weight. Check that the cut is precise.
							</Hunters.ListItem>

							<Hunters.ListItem number={6} title="Aesthetically Pleasing">
								The modern, laminated two-piece design of IKO Cambridge shingles provides depth and dimension. By staggering the size and position of the shingle’s “dragon’s teeth”, we’re able to create a random, varied pattern that emulates the rich textured appearance of genuine wood shakes. Deep shadow bands add eye-popping contrast.
							</Hunters.ListItem>

						</div>

						<Element name="gutters" />

						<div className="page">
							<h1>Continuous/Seamless Gutters</h1>
							<p>Seamless gutters are superior to their sectional counterparts because they minimize leaks. Even well-constructed seams with ample sealant can start to wear away over time, allowing water to escape the gutter system.</p>

							<Parallax img={Hunters.Images.gutters2}>
								A continuous system is a more cost-effective, superior option when you consider the advantages it offers.
							</Parallax>

							<Hunters.ListItem number={1} title="Maintenance Friendly">
								No gaps in the gutters means no debris stuck in the seams, which means
								less work cleaning and maintaining your gutters.
							</Hunters.ListItem>

							<Hunters.ListItem number={2} title="Material & Color Options">
								Seamless gutters are available in more materials and colors, giving you
								more options for that perfect look.
							</Hunters.ListItem>

							<Hunters.ListItem number={3} title="Less Costly">
								While they're slightly more expensive to purchase & install, you'll spend
								a mountain of cash less in maintaining these.
							</Hunters.ListItem>

							<Hunters.ListItem number={4} title="Aesthetically Awesome">
								The Seamless gutter just looks better. No fasteners, to gaps, no seams.
							</Hunters.ListItem>

							<Hunters.ListItem number={5} title="Installation Ease">
								Faster installation means less time walking around ladders and waiting for us
								to leave!
							</Hunters.ListItem>

						</div>

						<Element name="other-services" />

						<div className="page">
							<h1>Other Services</h1>

							<Hunters.ListItem number={1} title="Soffits & Facia">
								We install and repair soffits & facia.
							</Hunters.ListItem>

							<Hunters.ListItem number={2} title="Siding">
								We install and repair all types of siding, and we're experienced <a href="#" onClick={scrollTo('hardie')}>James Hardie Installers</a>
							</Hunters.ListItem>

						</div>

						<div className="page">

							<h1>Get a Quote</h1>

							<p>
								Call me today at (250) 306 - 6638,
								email me at <a href={"mailto:hunterexteriorsvernon@gmail.com"}>hunterexteriorsvernon@gmail.com</a>,
								or <a href={"https://www.facebook.com/hunterexteriors/"} target={"social"}>contact me on Facebook</a> and
								I'll get you a free quote.
							</p>

							<p>I provide free quotes and inspections on all roofs, soffits, facia, and siding projects.</p>

							<Image src={Hunters.Images.jesse} rounded style={{ width: '100%' }} />

						</div>

					</Col>
					<Col lg={1} md={0} className="RedColumn hidden-md">&nbsp;</Col>
				</Row>
			</Container>

		</div>
	);
}

export default App;
