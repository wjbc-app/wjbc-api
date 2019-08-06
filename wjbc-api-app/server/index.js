require(`dotenv`).config();
const express = require(`express`);
const body = require(`body-parser`);
const cors = require(`cors`);
const services = require(`./routes/services`);

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
// server config setting
app.use(cors());
app.use(body.urlencoded({ extended: true }));
app.use(body.json());
// routers
app.use(`/services`, services);

app.listen(PORT, () => console.log(`Cloner server is listening on port: ${PORT}`));
