const fs = require('fs');
const path = require('path');


function getDirs(rootDir, target) {
  const dirItems = fs.readdirSync(rootDir);
  const result = dirItems.reduce((targetFiles, item) => {
    const itemLink = path.join(rootDir, item);
    let additionalFiles = [];
    if (fs.statSync(itemLink).isDirectory()) {
      if (item === target) {
        additionalFiles = [
          path.join(rootDir, item),
        ];
      } else {
        additionalFiles = getDirs(itemLink, target);
      }
    }
    return [
      ...targetFiles,
      ...additionalFiles,
    ];
  }, []);
  return (result);
}

module.exports = getDirs;
