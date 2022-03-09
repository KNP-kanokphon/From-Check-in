const db = require("../models");
const Section = db.section;
const Getchoce = db.getchoce;
const { Op } = db.Sequelize

module.exports = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            Section.findAll()
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
            Section.hasMany(Getchoce, { foreignKey: 'section_id' });
            Getchoce.belongsTo(Section, { foreignKey: 'section_id' });
            Section.findAll({
                where: {
                    section_id: {
                        [Op.in]: id
                    }
                },
                include: [{ model: Getchoce }],
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    resolve(err);
                });
        });
    },
}