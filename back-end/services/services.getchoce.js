const db = require("../models");
const Getchoce = db.getchoce;
const Section = db.section;

module.exports = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            Getchoce.findAll()
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    resolve(err);
                });
        });
    },

}