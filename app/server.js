const express = require('express')
const app = express()
const port = 3000

const axios = require("axios");
const NODE_ELASTIC = process.env.ELASTIC_NODE || "http://localhost:9200/";

app.get('/ping', async (req, res) => {
  try {
    const response = await axios.get(`${NODE_ELASTIC}`);
    res.send(response.data);
  } catch (e) {
    res.status(500).json(e);
  }
})

app.get('/', (req, res) => {
  res.send('Hello from root route.')
})

app.post('/index', async (req, res) =>{
  res.json('Index created!');
})

app.get('/index/:setting', async (req, res) =>{
  res.json(`Get data ${req.params.setting} setting!`);
})

app.get('/search', async (req, res) => {
  res.json('Index search');
});

app.put('/data/:id', async (req, res)=>{
  res.json(`Put data for ${req.query.id} id!`);
})

app.delete('/data/:id', async (req, res)=>{
  res.json(`Deleted data ${req.params.id}!`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
