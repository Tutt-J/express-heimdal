const { Wood } = require("../models");
const fs = require('fs');

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
      message:
        error.message ||
        `Some error occurred while reading woods with hardness ${hardness}.`,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const pathname = `${req.protocol}://${req.get("host")}/uploads/${
      req.file.filename
    }`;
    const wood = await Wood.create({
      ...JSON.parse(req.body.datas),
      image: pathname,
    });

    res.status(201).json(wood);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while creating new wood.",
    });
  }
};

exports.update = async (req, res) => {
  try {
    //1. Récuperer l'essence de bois
    const wood = await Wood.findByPk(req.params.id);

    //2. Vérifier si elle existe
    if (!wood) {
      return res.status(404).json({
        error: "Wood not found",
      });
    }

    //3. Parser les datas pour les récupérer
    let newWood = {
      ...JSON.parse(req.body.datas),
    };

    if (req.file) {
      const pathname = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;

      newWood = {
        ...newWood,
        image: pathname,
      };

      if (wood.image) {
        const filename = wood.image.split("/uploads/")[1];
        fs.unlink(`uploads/${filename}`, () => {
          console.log(`Image ${filename} deleted`);
        });
      }
    }

    //4. Mettre à jour la donnée
    await wood.update(newWood);

    res.status(200).json(wood);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while updating new wood.",
    });
  }
};
