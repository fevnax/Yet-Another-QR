import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// app.get("/", (req, res) => {
//     res.render("index");
// });

app.get("/", (req, res) => {
    res.render("partials/header");
});

app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});