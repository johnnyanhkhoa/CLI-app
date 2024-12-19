const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function compressImages(directory, outputDir) {
  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const files = fs
      .readdirSync(directory)
      .filter((file) => ['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase()));

    files.forEach((file) => {
      const inputPath = path.join(directory, file);
      const outputPath = path.join(outputDir, file);
      sharp(inputPath)
        .resize(800)
        .toFile(outputPath, (err) => {
          if (err) {
            console.error(`Error compressing ${file}:`, err.message);
          } else {
            console.log(`Compressed: ${file} -> ${outputPath}`);
          }
        });
    });
  } catch (error) {
    console.error('Error compressing images:', error.message);
  }
}

module.exports = compressImages;
