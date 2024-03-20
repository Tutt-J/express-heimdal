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

exports.create = async (req, res) => {
  try {
    const pathname = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    const wood = await Wood.create({
      ...JSON.parse(req.body.datas),
      image: pathname
    });

    console.log(wood);
    
    res.status(201).json(wood);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while creating new wood.",
    });
  }
}