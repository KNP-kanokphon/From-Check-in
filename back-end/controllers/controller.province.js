const proviceService = require("../services/services.province");

//Get Data All
exports.findAll = (req, res) => {
    proviceService
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
    proviceService
      .findByid(id)
      .then((data) => res.send(data))
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  };
  
    //Get Data One
    exports.findOneByGeography = (req, res) => {
      const id = req.params.id;
      // console.log(req)
      proviceService
        .findOneByGeography(id)
        .then((data) => res.send(data))
        .catch((err) => {
          console.log(err);
          res.status(500).send(err);
        });
    };

    exports.findOneByDistrict = (req, res) => {
      const id = req.params.id;
      // console.log(req)
      proviceService
        .findOneByDistrict(id)
        .then((data) => res.send(data))
        .catch((err) => {
          console.log(err);
          res.status(500).send(err);
        });
    };

  // //Get Data One
  // exports.updateByCode = (req, res) => {
  //   const code = req.params.code;
  //   const data = req.body;
  //   userService
  //     .updateByCode(code, data)
  //     .then((data) => res.send(data))
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).send(err);
  //     });
  // };
  
  // exports.deleteByCode = (req, res) => {
  //   const code = req.params.code;
  //   userService
  //     .deleteByCode(code)
  //     .then((data) => res.send(data))
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).send(err);
  //     });
  // };
  