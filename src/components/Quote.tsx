import React from "react";
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import Amplify, { API } from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);


function Quote( props:{} ){

	const sendQuote = ( event:any ) => {

		const name = document.getElementById('name') as HTMLInputElement;
		const email = document.getElementById('email') as HTMLInputElement;
		const phone = document.getElementById('phone') as HTMLInputElement;
		const details = document.getElementById('details') as HTMLTextAreaElement;

		API.post('api797228ba', '/quotes', { body: {
			name: name.value,
			email: email.value,
			phone: phone.value,
			details: details.value
		}}).then( response => {
			console.log( response );
		}).catch( error => {
			console.log( error );
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
