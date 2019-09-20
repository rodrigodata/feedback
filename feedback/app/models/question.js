module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        text: DataTypes.STRING,
        question_sequence: DataTypes.INTEGER
    });

    Question.associate = (models) => {
        Question.belongsTo(models.Form, {
            foreignKey: 'id'
        });

        Question.hasMany(models.Answer);
    };

    return Question;
}