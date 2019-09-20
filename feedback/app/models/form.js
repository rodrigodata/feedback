module.exports = (sequelize, DataTypes) => {
    const Form = sequelize.define('Form', {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        date: DataTypes.DATE
    });

    Form.associate = (models) => {
        Form.hasMany(models.question);
    };

    return Form;
}