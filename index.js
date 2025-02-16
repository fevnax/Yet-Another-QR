import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT;
const API_URL = "https://qrtag.net/api/qr_4.png?url="

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/yaqr", async (req, res) => {
    const url = req.body.url;
    const qrCodeUrl = API_URL + encodeURIComponent(url);
    if (!url) {
        return res.status(400).send("URL is required");
    }
    try {
        res.render("yaqr", { qrcode: qrCodeUrl });
        // console.log(qrcode);
    } catch (error) {
        res.status(500).send("Error");
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});