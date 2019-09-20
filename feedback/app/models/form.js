module.exports = (sequelize, DataTypes) => {
    const Form = sequelize.define('Form', {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        date: DataTypes.DATE
    });

    return Form;
}