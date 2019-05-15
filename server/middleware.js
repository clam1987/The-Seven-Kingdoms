const {json, urlenconded, Router} = require("express"),
logger = require("morgan"),
cookieParser = require("cookie-parser"),
{ config } = require('dotenv'),
router = Router();

config();

let middleware = [
    logger("dev"),
    cookieParser(process.env.SECRET),
    urlenconded({extended: true}),
    json()
];

middleware.forEach(piece => router.use(piece));

module.exports = router;