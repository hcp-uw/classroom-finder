import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/health", (req: Request, res: Response) => {
	res.status(200).send("Ok");
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
