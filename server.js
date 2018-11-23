const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const app = express();

let data = [];
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser());

app.get('/ping', function (req,res) {
  return res.send('pong');
})
axios.get('http://terriblytinytales.com/test.txt')
  .then((response)=>{
    data = (response.data);
    let wordsArray = data.split(/\s+/);
    let wordsFreq = {};
    wordsArray.forEach((word)=>{
      if(wordsFreq.hasOwnProperty(word)){
        wordsFreq[word]++;
      }else{
        wordsFreq[word] = 1;
      }
    });
    let sortedFreq = [];
    sortedFreq = Object.keys(wordsFreq).map((word)=>{
      return {
        keyword: word,
        count: wordsFreq[word]
      };
    });
    sortedFreq.sort((a,b)=>{
      return b.count - a.count;
    })
    data = sortedFreq;
  })
app.post('/',function(req,res) {
  const num = req.body.value;
  console.log(num);
   let newData = data.slice(0,num);
  return res.send(newData);
})

app.get('*', function (req,res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});




app.listen(process.env.PORT || 8080);
