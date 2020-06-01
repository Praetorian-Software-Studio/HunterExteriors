// using a basic lambda handler
exports.handler = (event, context, callback) => {

	console.log('event', event);
	console.log('context', context);

	callback( null, {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		body: event.body
	});

}
