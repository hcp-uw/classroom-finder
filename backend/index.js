const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/health", (req, res) => {
	res.status(200).send("Ok");
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
