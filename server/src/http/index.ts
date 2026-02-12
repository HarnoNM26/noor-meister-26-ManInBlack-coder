import { Router } from "express";

const http = Router();

const routes = [
    {path: '/health', method: '/get',  module: '../routes/health'},
	{path: '/nps', method: '/get', module: "../routes/elering"}
]

routes.forEach(async ({ path, module }) => {
	const routeModule = await import(module);
	http.use(path, routeModule.default);
});

export default http;