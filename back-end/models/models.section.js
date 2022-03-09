module.exports = (sequelize, Sequelize) => {
    const Section = sequelize.define("tb_section", {
        section_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        headerSection: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        updatedon: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    })
    return Section;
}
