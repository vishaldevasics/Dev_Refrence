const express = require('express');

const app = express();

const port = 3000;



function register_patients(name,age,gender,prevVisitDate,NoOfKidney,health){
  class patient {
    name;
    age;
    gender;
    prevVisitDate;
    NoOfKidney;
    health;
  }
  const t = new patient();
  t.name = name;
  t.age = age;
  t.gender = gender;
  t.prevVisitDate = prevVisitDate;
  t.NoOfKidney = NoOfKidney;
  t.health = health;
  patientsList.push(t);
}

var patientsList = [];

function search(name){
  for(var i=0;i<patientsList.length;i++){
    if(patientsList[i].name==name){
      return i;
    }
  }
  return -1;
}
app.get('/checkup',function(req,res){
  console.log(patientsList);
  if(search(req.query.name) != -1){
    res.send(`The number of kidney the patient have is : ${patientsList[search(req.query.name)].NoOfKidney}`);
  }
  else{
    register_patients(req.query.name,req.query.age,req.query.gender,req.query.prevVisitDate,req.query.NoOfKidney,req.query.health);
    res.send(`The number of kidney the patient have is : ${patientsList[search(req.query.name)].NoOfKidney}`);
  }
})

app.post('/addnewkidney',function(req,res){
  if(search(req.query.name) != -1){
    if(patientsList[search(req.query.name)].NoOfKidney < 2){
      patientsList[search(req.query.name)].NoOfKidney++;    
    }
  }
  else{
    register_patients(req.query.name,req.query.age,req.query.gender,req.query.prevVisitDate,req.query.NoOfKidney,req.query.health);
    if(patientsList[search(req.query.name)].NoOfKidney < 2){
      patientsList[search(req.query.name)].NoOfKidney++;    
    }
  }
  res.send("Kidney added successfully");
})

app.put('/replacekidney',function(req,res){
  if(search(req.query.name) != -1){
    patientsList[search(req.query.name)].NoOfKidney = req.query.NoOfKidney;
  }
  else{
    register_patients(req.query.name,req.query.age,req.query.gender,req.query.prevVisitDate,req.query.NoOfKidney,req.query.health);
    patientsList[search(req.query.name)].NoOfKidney = req.query.NoOfKidney;
  }
  res.send("Kidney replaced successfully");
})

app.delete('/decreasekidney',function(req,res){
  if(search(req.query.name) != -1){
    if(patientsList[search(req.query.name)].NoOfKidney > 0){
      patientsList[search(req.query.name)].NoOfKidney--;    
    }
    else{
      res.status(411).send("Patient don't have any kidney");
    }
  }
  else{
    register_patients(req.query.name,req.query.age,req.query.gender,req.query.prevVisitDate,req.query.NoOfKidney,req.query.health);
    if(patientsList[search(req.query.name)].NoOfKidney > 0){
      patientsList[search(req.query.name)].NoOfKidney--;    
    }
    else{
      res.status(411).send("Patient don't have any kidney");
    }
  }
  res.send("Kidney decreased successfully");
})


app.listen(port);