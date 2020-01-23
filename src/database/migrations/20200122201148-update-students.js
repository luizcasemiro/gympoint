module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('students', 'weight', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    });
    return queryInterface.changeColumn('students', 'height', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('students', 'weight', {
      type: Sequelize.DECIMAL,
      allowNull: false,
    });
    return queryInterface.changeColumn('students', 'height', {
      type: Sequelize.DECIMAL,
      allowNull: false,
    });
  },
};
