const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', function(req,res){

  // The content to write to the file
  let content ='\n' + req.query.task;
  const date = req.query.date;
  content += ' ' + date;

  fs.appendFile('D:\\Work\\Cohort_Practice\\httpserver1\\todolist.txt', content, (err) => {
    if (err) {
      console.error('An error occurred:', err);
    } else {
      console.log('File has been written successfully.');
    }
  });
  console.log(req.body);
  
  res.send(`<b>'File has been written successfully.' : </b> ${content}`);
})

app.listen(port);