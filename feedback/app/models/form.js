module.exports = {
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
    },
  
    down: (queryInterface) => {
      return queryInterface.dropTable('form');
    }
  };