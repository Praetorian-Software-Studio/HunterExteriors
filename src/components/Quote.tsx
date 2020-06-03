import React, {useState} from "react";
import {Button, Col, Form, InputGroup, Alert} from "react-bootstrap";
import Amplify, { API } from 'aws-amplify';
// import aws_exports from '../aws-exports.js';
Amplify.configure({
	"aws_project_region": "us-east-1",
	"aws_cognito_identity_pool_id": "us-east-1:c8f456df-f75f-4468-9568-5588a5349db1",
	"aws_cognito_region": "us-east-1",
	"oauth": {},
	"aws_cloud_logic_custom": [
		{
			"name": "api797228ba",
			"endpoint": "https://7eqzr4g724.execute-api.us-east-1.amazonaws.com/prod",
			"region": "us-east-1"
		}
	]
});


function Quote( props:{} ){

	const [ status, setStatus ] = useState('ready');

	const sendQuote = ( event:any ) => {

		setStatus('sending');
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

			setStatus('complete');
			setTimeout(()=>setStatus('ready'), 5000);

		}).catch( error => {

			setStatus('error');
			setTimeout(()=>setStatus('ready'), 5000);

		});

	};

	return (
		<>
			{ status === 'ready' &&
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
							<Form.Control type={"email"} id="email"/>
						</InputGroup>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>Phone</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control type={"phone"} id="phone"/>
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
			</Form>}

			{ status === 'sending' && <>
				<Alert variant="secondary">
					<p>Sending...</p>
				</Alert>
			</>}

			{ status === 'complete' && <>
				<Alert variant="primary">
					<p>Thank You! We'll get back to you as soon as we're off the roof!</p>
				</Alert>
			</>}

			{ status === 'error' && <>
				<Alert variant="warning">
					<p>Something happened and we didn't get those details. Give us a call at (250) 306 - 6638 and we'll discuss it with you!</p>
				</Alert>
			</>}
		</>
	)

}

export default Quote;
