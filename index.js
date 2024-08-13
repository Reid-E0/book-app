const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();
const port = 3000;
app.use(favicon(path.join(__dirname, 'src', 'imgs', 'book-app-icon.png')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/homepage.html'));
});
app.get('/bookList.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/bookList.html'));
});
app.get('/bookSearch.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/bookSearch.html'));
});
app.get('/aboutMe.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/aboutMe.html'));
});
app.use(express.static('src'));
app.listen(port, () => {
  console.log(`Listening ${port}`);
});
