const fs = require('fs');
const path = require('path');

// List all file paths in a directory, including subdirectories given a extension
const listFiles = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      listFiles(filePath, filelist);
    } else {
      filelist.push(filePath);
    }
  });
  return filelist;
};

// List all files in the current directory
const srcPath = path.join(__dirname, 'src');
const srcPath2 = srcPath.replace(/\\/g, '/');
console.log(srcPath);
let files = listFiles(srcPath).filter(file => file.endsWith('.ts')).map(file => file.replace(/\\/g, '/').replace(srcPath2, '.'));
// remove the extension from files
files = files.map(file => file.replace('.ts', ''));

let data = '';
files.forEach(file => {
  data += `export * from '${file}';\n`;
});

fs.writeFileSync(path.join(__dirname, 'src/index.ts'), data);
