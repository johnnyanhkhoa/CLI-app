const fs = require('fs');
const path = require('path');

function renameFiles(directory, prefix) {
  try {
    const files = fs.readdirSync(directory);
    files.forEach((file, index) => {
      const ext = path.extname(file);
      const newName = `${prefix}_${index}${ext}`;
      fs.renameSync(path.join(directory, file), path.join(directory, newName));
      console.log(`Renamed: ${file} -> ${newName}`);
    });
  } catch (error) {
    console.error('Error renaming files:', error.message);
  }
}

module.exports = renameFiles;
