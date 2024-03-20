const { Wood } = require("../models");

exports.readAll = async (req, res) => {
  try {
    const woods = await Wood.findAll();
    res.status(200).json(woods);
  } catch {
    res.status(500).json({
      message: error.message || "Some error occurred while reading woods.",
    });
  }
};
