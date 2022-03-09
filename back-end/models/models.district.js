module.exports = (sequelize, Sequelize) => {
    const District = sequelize.define("tb_district", {
        tb_districtID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        tb_nameThai: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tb_nameEng: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tb_ProvinceID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        updatedon: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    })

    return District;
}
