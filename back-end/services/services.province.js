const db = require("../models");
const Province = db.province;
const Geography = db.geography;
const District = db.district;

module.exports = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      Province.findAll()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          resolve(err);
        });
    });
  },
  findByid: (id) => {
    console.log(id)
    return new Promise((resolve, reject) => {
      Province.findAll({
        where: { tb_geography_id: id }
      })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          resolve(err);
        });
    });
  },

  findOneByGeography: (id) => {
    return new Promise((resolve, reject) => {
      Province.belongsTo(Geography, { foreignKey: 'tb_geography_id' });
      Geography.hasMany(Province, { foreignKey: 'tb_geography_id' });
      Province.findAll({
        where: {
          tb_provinceID: id
        },
        include: [{ model: Geography }],
      })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          resolve(err);
        });
    });
  },
  findOneByDistrict: (id) => {
    return new Promise((resolve, reject) => {
      District.belongsTo(Province, { foreignKey: 'tb_ProvinceID' });
      Province.hasMany(District, { foreignKey: 'tb_ProvinceID' });
      Province.findAll({
        where: {
          tb_provinceID: id
        },
        include: [{ model: District }],
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