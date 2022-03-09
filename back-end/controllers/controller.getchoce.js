const getchoceService = require("../services/services.getchoce.js");

//Get Data All
exports.findAll = (req, res) => {
    getchoceService
        .findAll()
        .then((data) => res.send(data))
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
};
