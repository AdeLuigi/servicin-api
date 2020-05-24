const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();
mongoose.connect(
  'mongodb+srv://ademario:ademario@cluster0-pltac.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
app.use(cors());
app.use(routes);
// app.use(express.json());

app.listen(process.env.PORT, () => console.log(`App running in port ${process.env.PORT}`));
