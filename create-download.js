import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const zip = new JSZip();

function addFolderToZip(folderPath, zipFolder) {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      const fileContent = fs.readFileSync(filePath);
      zipFolder.file(file, fileContent);
    } else if (stats.isDirectory()) {
      const subFolder = zipFolder.folder(file);
      addFolderToZip(filePath, subFolder);
    }
  }
}

// Add project files to the zip
addFolderToZip('.', zip);

// Generate the zip file
zip.generateAsync({ type: 'nodebuffer' })
  .then((content) => {
    // Write the zip file
    fs.writeFileSync('project.zip', content);
    console.log('Project has been zipped to project.zip');
  })
  .catch((err) => {
    console.error('Error creating zip file:', err);
  });