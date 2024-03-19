"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Woods",
      [
        {
          name: "Épicéa",
          type: "softwood",
          hardness: "tender",
        },
        {
          name: "Pin",
          type: "softwood",
          hardness: "medium-hard",
        },
        {
          name: "Padouk",
          type: "exotic wood",
          hardness: "hard",
        },
        {
          name: "Érable",
          type: "noble and hardwoods",
          hardness: "medium-hard",
        },
        {
          name: "Hêtre",
          type: "noble and hardwoods",
          hardness: "medium-hard",
        },
        {
          name: "Itauba",
          type: "exotic wood",
          hardness: "hard",
        },
        {
          name: "Douglas",
          type: "softwood",
          hardness: "tender",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Woods', null, {});

  },
};
