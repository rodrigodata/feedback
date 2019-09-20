<<<<<<< HEAD:feedback/app/migrations/form.model.js
module.exports = () => {
  
    up: (queryInterface, DataTypes) => {
      return queryInterface.createTable('form', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        description: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
      });
    };
  
    down: (queryInterface) => {
      return queryInterface.dropTable('form');
    };
  };
=======
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
>>>>>>> 9b8e75a2104622483029b7b8be9f8dde65fbc8c3:feedback/app/models/form.js
