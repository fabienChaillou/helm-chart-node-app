const express = require('express')
const app = express()
const port = 3000

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
