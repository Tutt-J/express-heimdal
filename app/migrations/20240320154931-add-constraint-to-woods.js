"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Woods", "type", {
      type: Sequelize.ENUM,
      values: ["softwood", "exotic wood", "noble and hardwoods"],
      allowNull: false,
    });

    await queryInterface.changeColumn("Woods", "hardness", {
      type: Sequelize.ENUM,
      values: ["tender", "medium-hard", "hard"],
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Woods", "type", {
      allowNull: true,
    });

    await queryInterface.changeColumn("Woods", "hardness", {
      allowNull: true,
    });
  },
};
