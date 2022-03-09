const districtService = require("../services/services.district.js");

//Get Data All
exports.findAll = (req, res) => {
    districtService
        .findAll()
        .then((data) => res.send(data))
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });

};

exports.findById = (req, res) => {
    const id = req.params.id;
    districtService
        .findById(id)
        .then((data) => res.send(data))
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
}

//Get Data One
// exports.findByCode = (req, res) => {
//     const id = req.params.id;
//     geographyService
//         .findByCode(id)
//         .then((data) => res.send(data))
//         .catch((err) => {
//             console.log(err);
//             res.status(500).send(err);
//         });
// };