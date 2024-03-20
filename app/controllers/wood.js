const { Wood } = require("../models");

exports.readAll = async (req, res) => {
  try {
    const woods = await Wood.findAll();
    res.status(200).json(woods);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while reading woods.",
    });
  }
};

exports.readByHardness = async (req, res) => {
  try {
    const hardness = req.params.hardness;
    const woods = await Wood.findAll({
      where: {
        hardness: hardness,
      },
    });
    res.status(200).json(woods);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Some error occurred while reading woods with hardness ${hardness}.`,
    });
  }
};
