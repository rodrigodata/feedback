module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('answer', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            question_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: 'question',
                referencesKey: 'id'
            },
            text: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            username: {
                allowNull: true,
                type: DataTypes.STRING,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('answer');
    }
}