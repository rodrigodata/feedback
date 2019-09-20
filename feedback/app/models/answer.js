module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('Answer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        question_id: DataTypes.INTEGER,
        text: DataTypes.INTEGER,
        username: DataTypes.STRING
    });

    Answer.associate = (models) => {
        Answer.belongsTo(models.Question, {
                foreignKey: 'question_id'    
        });
    };

    return Answer;
}