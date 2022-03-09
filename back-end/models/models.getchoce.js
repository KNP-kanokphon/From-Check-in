module.exports = (sequelize, Sequelize) => {
    const Getchoce = sequelize.define("tb_choce", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        choce_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        nameChoce: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        section_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        updatedon: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    })

    return Getchoce;
}
