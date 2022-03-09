const db = require("../models");
const District = db.district;
const Province = db.province;

module.exports = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      District.findAll()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          resolve(err);
        });
    });
  },

  findById: (id) => {
    return new Promise((resolve, reject) => {
      District.findAll({
        where: {
          tb_ProvinceID: id
        },
        // include: {
        //   model: Province
        // }
      })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          resolve(err);
        });
    });
  }
  // create: (survey) => {
  //   return new Promise((resolve, reject) => {
  //     Survey.create(survey)
  //       .then((data) => {
  //         resolve(data);
  //       })
  //       .catch((err) => {
  //         resolve(err);
  //       });
  //   });
  // },
}