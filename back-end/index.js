const express = require("express");
const server = express();
const port = 5000;
const bodyParser = require('body-parser')

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, PATCH, DELETE, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Option, Authorization"
    );
    next();
});

server.use(bodyParser.urlencoded({ extended: false }))

server.use(bodyParser.json())

server.use("/api/getProvince", require("./routes/router.province.js"));
server.use("/api/getGeography", require("./routes/ronter.geography.js"));
server.use("/api/getDistrict", require("./routes/ronter.district.js"));
server.use("/api/getSection", require("./routes/ronter.section.js"));
server.use("/api/getChoce", require("./routes/ronter.getchoce.js"));


server.listen(port, function () {
    console.log(`Server At Port: ${port}`);
});