// api/index.js
const Hapi = require("@hapi/hapi");

module.exports = async (req, res) => {
	const server = Hapi.server();

	server.route({
		method: "GET",
		path: "/",
		handler: (request, h) => {
			return {message: "Hello from Hapi on Vercel!"};
		},
	});

	await server.initialize();

	const response = await server.inject({
		method: req.method,
		url: req.url,
		payload: req.body,
	});

	res.statusCode = response.statusCode;
	res.setHeader("Content-Type", response.headers["content-type"]);
	res.end(response.payload);
};
