
module.exports = (sequelize, DataTypes) => {
    const Form = sequelize.define('Form', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        date: DataTypes.DATE
    });

    Form.associate = (models) => {
        Form.hasMany(models.Question);
    };

    return Form;
}