const db = require("../models");
const Geography = db.geography;
const Province = db.province;

module.exports = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      Geography.findAll()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          resolve(err);
        });
    });
  },
  findByid: (id) => {
    return new Promise((resolve, reject) => {
      Province.findAll({
        where: {
          tb_geography_id: id
        }
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