const express = require(`express`);
const body = require(`body-parser`);
const cors = require(`cors`);

const PORT = process.env.SERVER_PORT;
const app = express();

app.use(cors());
app.use(body.urlencoded({ extended: true }));
app.use(body.json());

app.listen(PORT, () => console.log(`Cloner server is listening on port: ${PORT}`));
