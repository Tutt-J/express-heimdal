const fs = require("fs");

async function remove(image) {
  // Extraction du nom de fichier à partir du chemin de l'image
  const filename = image.split("/uploads/")[1];
  // Suppression du fichier en utilisant le module fs (File System)
  fs.unlink(`uploads/${filename}`, () => {
    console.log(`Image ${filename} deleted`);
  });
}

module.exports = {
  remove,
};
