module.exports = (sequelize, Sequelize) => {
    const Geography = sequelize.define("tb_geography", {
        tb_geography_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        tb_nameThai: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        updatedon: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    })

    return Geography;
}
