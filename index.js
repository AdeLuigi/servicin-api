const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');

const app = express();
mongoose.connect(
  'mongodb+srv://ademario:ademario@cluster0-pltac.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
app.use(routes);
// app.use(express.json());

app.listen(3000, () => {
  console.log('Tá on XD');
});
