module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('Answer', {
        id: DataTypes.INTEGER,
        question_id: DataTypes.INTEGER,
        text: DataTypes.INTEGER,
        username: DataTypes.STRING
    });

    Answer.associate = (models) => {
        Answer.belongsTo(models.question);
    };

    return Answer;
}