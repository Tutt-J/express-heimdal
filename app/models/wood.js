"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wood.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Name is required" },
        },
      },
      type: {
        type: DataTypes.ENUM,
        values: ["softwood", "exotic wood", "noble and hardwoods"],
        allowNull: false,
        validate: {
          isIn: {
            args: [["softwood", "exotic wood", "noble and hardwoods"]],
            msg: "Type must be one of: softwood, exotic wood, noble and hardwoods",
          },
        },
      },
      hardness: {
        type: DataTypes.ENUM,
        values: ["tender", "medium-hard", "hard"],
        allowNull: false,
        validate: {
          isIn: {
            args: [["tender", "medium-hard", "hard"]],
            msg: "Hardness must be one of: tender, medium-hard, hard",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Wood",
    }
  );
  return Wood;
};
