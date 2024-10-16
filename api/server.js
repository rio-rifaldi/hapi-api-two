console.clear();
const Hapi = require("@hapi/hapi");
const routes = require("../src/routes.js");

const port = 5000;
const host = "localhost";

const init = async () => {
	const server = Hapi.server({
		port,
		host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
		routes: {
			cors: {
				origin: ["*"],
			},
		},
	});

	server.route(routes);
	await server.initialize();

	const response = await server.inject({
		method: req.method,
		url: req.url,
		payload: req.body,
	});

	res.status(response.statusCode).send(response.result);
};

init();
