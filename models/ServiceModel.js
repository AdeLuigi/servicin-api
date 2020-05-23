const mongoose = require('mongoose');

/* import ProviderSchema from './utils/ProviderSchema'; */

// const PointSchema = require('./utils/PointSchema');
const Address = require('./utils/AddressSchema');

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  hoursAvailableStart: { type: Date, required: false },
  hoursAvailableEnd: { type: Date, required: false },
  photos: { type: [String], required: false },
  remote: { type: Boolean, required: true },
  amountOfPeople: { type: Number, required: false },
  providers: { type: [String] },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  address: Address,
});

module.exports = mongoose.model('Service', ServiceSchema);
