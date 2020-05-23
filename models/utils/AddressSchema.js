const mongoose = require('mongoose');
const PointSchema = require('./PointSchema');

const AddressSchema = new mongoose.Schema({
  cep: Number,
  street: String,
  number: Number,
  complement: String,
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
});

module.exports = AddressSchema;
