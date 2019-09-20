module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
        id: DataTypes.INTEGER,
        form_id: DataTypes.INTEGER,
        text: DataTypes.STRING,
        question_sequence: DataTypes.INTEGER
    });

    return Question;
}