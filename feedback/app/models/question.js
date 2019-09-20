module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
        id: DataTypes.INTEGER,
        text: DataTypes.STRING,
        question_sequence: DataTypes.INTEGER
    });

    Question.associate = (models) => {
        Question.belongsTo(models.form);
        Question.hasMany(models.answer);
    };

    return Question;
}