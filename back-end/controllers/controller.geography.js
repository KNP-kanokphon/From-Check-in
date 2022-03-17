const geographyService = require("../services/services.geography.js");

//Get Data All
exports.findAll = (req, res) => {
  geographyService
    .findAll()
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });

};

//Get Data One
exports.findByid = (req, res) => {
  const id = req.params.id;
  geographyService
    .findByid(id)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};