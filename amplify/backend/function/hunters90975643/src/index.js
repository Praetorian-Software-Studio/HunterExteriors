const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

exports.handler = (event, context, callback) => {

	const tpl = {
		TemplateName: 'HunterExteriors-RequestQuote',
		TemplateData: event.body
	}

	const params = {
		Destination: { /* required */
			ToAddresses: [ 'hunterexteriorsvernon@gmail.com' ]
		},
		Source: 'noreply@hunterexteriors.ca',
		ReplyToAddresses: [ event.body.email ],
		Template: tpl.TemplateName,
		TemplateData: tpl.TemplateData
	};

	console.log( params );

	const ses = new AWS.SES();

	ses.testRenderTemplate( tpl, function( err, data ){

		if (err){

			console.log(err, err.stack);

			callback( null, {
				statusCode: 400,
				headers: {
					"Access-Control-Allow-Origin": "*"
				}
			});

		}

		else {

			ses.sendTemplatedEmail(params, function(err, data) {

				// an error occurred
				if (err){

					console.log(err, err.stack);

					callback( null, {
						statusCode: 500,
						headers: {
							"Access-Control-Allow-Origin": "*"
						},
						body: event.body
					});

				}

				// successful response
				else {

					console.log(data);

					callback( null, {
						statusCode: 200,
						headers: {
							"Access-Control-Allow-Origin": "*"
						}
					});

				}
			});

		}

	});

}
