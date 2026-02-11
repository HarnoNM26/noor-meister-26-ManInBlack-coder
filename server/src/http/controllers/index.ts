import { Router } from "express";

const http = Router();

const routes = [
    {path: '/health', method: '/get',  module: '../routes/health'},
]

routes.forEach(async ({ path, module }) => {
	const routeModule = await import(module);
	http.use(path, routeModule.default);
});

export default http;