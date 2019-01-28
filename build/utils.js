const fs = require('fs');
const path = require('path');

const resolve = function (...args) {
  return path.resolve(__dirname, '..', ...(Array.isArray(args[0]) ? args[0] : args));
};

// Recursively return all files in directory
const getFiles = dirname => {
  return fs.readdirSync(dirname).reduce((files, file) => {
    const filePath = path.resolve(dirname, file);
    const stats = fs.statSync(filePath);
    // If this is a directory then push all children to array
    if (stats && stats.isDirectory()) {
      files.push(...getFiles(filePath));
    } else {
      files.push(filePath);
    }
    return files;
  }, []);
};

module.exports = { resolve };