import React from "react";
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import axios from 'axios';

function Quote( props:{} ){

	const sendQuote = ( event:any ) => {

		const name = document.getElementById('name') as HTMLInputElement;
		const email = document.getElementById('email') as HTMLInputElement;
		const phone = document.getElementById('phone') as HTMLInputElement;
		const details = document.getElementById('details') as HTMLTextAreaElement;

		console.log(process.env.API_URL, process.env.API_KEY);

		axios({
			url: process.env.API_URL,
			method: 'post',
			headers: {
				'x-api-key': process.env.API_KEY
			},
			data: {
				name: name.value,
				email: email.value,
				phone: phone.value,
				details: details.value
			}
		}).then( response => {
			console.log( response );
		});

	};

	return (
		<>
			<Form>
				<Form.Row>
					<Col>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>Name</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control type={"text"} id="name"/>
						</InputGroup>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>Email Address</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control type={"text"} id="email"/>
						</InputGroup>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>Phone</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control type={"text"} id="phone"/>
						</InputGroup>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>Details of Job</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control as={"textarea"} id="details"/>
						</InputGroup>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col lg={8}/>
					<Col lg={4}>
						<Button className="btn-block" variant="primary" onClick={sendQuote}>Request a Quote!</Button>
					</Col>
				</Form.Row>
			</Form>
		</>
	)

}

export default Quote;
