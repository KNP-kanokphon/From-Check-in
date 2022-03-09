const sectionService = require("../services/services.section.js");

//Get Data All
exports.findAll = (req, res) => {
    sectionService
        .findAll()
        .then((data) => res.send(data))
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });

};

exports.findByid = (req, res) => {
    console.log(req.body)
    const { idList } = req.body;
    console.log(idList)
    sectionService
        .findByid(idList)
        .then((data) => res.send(data))
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
};

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