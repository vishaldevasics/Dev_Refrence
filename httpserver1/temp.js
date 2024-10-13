const fs = require('fs');
const path = 'D:\\Work\\Cohort_Practice\\httpserver1\\todolist.txt';  // You can specify an absolute path if necessary.

const content = 'Hello, World!';

fs.writeFile(path, content, (err) => {
  if (err) {
    console.error('An error occurred while writing to the file:', err);
  } else {
    console.log(`File has been written successfully to ${path}.`);
  }
});
