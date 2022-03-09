module.exports = (sequelize, Sequelize) => {
    const Province = sequelize.define("tb_province", {
        tb_provinceID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        tb_provinceNameThai: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tb_provinceNameEng: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tb_geography_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        updatedon: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    })
    return Province;
}
