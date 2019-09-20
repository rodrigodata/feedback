module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('question', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            form_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: 'form',
                referencesKey: 'id'
            },
            text: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            question_sequence: {
                allowNull: false,
                type: DataTypes.INTEGER,
            }
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('question');
    }
};