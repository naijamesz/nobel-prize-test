const express = require('express');
const axios = require('axios')
const app = express();
const port = 3000;
const ejs = require('ejs')


app.set('view engine', ejs);
app.use(express.urlencoded({ extended: true })); // ใช้ middleware express.urlencoded เพื่อแปลงข้อมูล form

// Get the port from the environment variable PORT, if
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/login', (req, res){
  const { username, password } = req.body;
  // If for Check login or not
  // if (username === 'user' && password === 'password') {
  res.redirect('/nobels');
  // } else {
  //   res.send('Login failed');
  // }
});

app.get('/nobels', async (req, res) => {
  const year = req.query.year;
  // respose รับ data year จาก api ผ่าน axios โดยใช้ method get
  const {data} = await axios.get('http://api.nobelprize.org/2.1/loureates?year=`${year}`');
  res.render('nobels',{data, year})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
