const { Wood } = require("../models");
const { remove } = require("../helpers/image.js");

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

    //4. Si on a une nouvelle image
    if (req.file) {
      //4A. Reconstruire le chemin de la nouvelle image
      const pathname = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;

      //4B. Changer le chemin de l'image
      newWood = {
        ...newWood,
        image: pathname,
      };

      //4C. Dans le cas où il y avait déjà une image, la supprimer
      if (wood.image) {
        await remove(wood.image);
      }
    }

    //5. Mettre à jour la donnée
    await wood.update(newWood);

    //6. Renvoyer le bois mis à jour
    res.status(200).json(wood);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while updating new wood.",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    // 1. Récuperer l'essence de bois
    const wood = await Wood.findByPk(req.params.id);

    // 2. Vérifier si elle existe
    if (!wood) {
      return res.status(404).json({
        error: "Wood not found",
      });
    }

    // 3. Dans le cas où on a une image, la supprimer
    if (wood.image) {
      await remove(wood.image);
    }

    // 4. Supprimer l'essence de bois en BDD (destroy)
    await wood.destroy();

    // 5. Renvoyer un code 204 (No content)
    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while deleting new wood.",
    });
  }
};
